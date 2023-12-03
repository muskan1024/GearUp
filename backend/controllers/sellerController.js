const bcrypt = require("bcrypt");
const { Seller, validateSeller } = require("./../models/seller");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const { AUTH_TOKEN, ADMIN } = require("../constants");

async function sellerSignIn(req, res) {
    const { email, password } = req.body;
  
    let seller = await Seller.findOne({ email });
  
    if (!seller) {
      return res.status(401).send("This email has not been registered! Please SignUp");
    }
  
    const validPassword = await bcrypt.compare(password, seller.password);
  
    if (!validPassword) {
      return res.status(401).send("Invalid Credentials!");
    }
  
    const token = jwt.sign(
      {
        _id: seller._id,
        name: `${seller.fullName} ${seller.shopName}`,
        isAdmin: seller.role === ADMIN,
      },
      "1@3456Qw-"
    );
    res.header(AUTH_TOKEN, token).send({
      name: `${seller.fullName} ${seller.shopName}`,
      email: seller.email,
      isAuthenticated: true,
    });
}

async function sellerSignUp(req, res) {
  const { error } = validateSeller(req.body);
  if (error) {
    return res.status(400).send(`${error}`);
  }

  let seller = await Seller.findOne({ email: req.body.email });
  if (seller) {
    return res
      .status(400)
      .send("This email has already been registered as an admin! Please use a different email.");
  }

  let sellerPhone = await Seller.findOne({ contactNumber: req.body.contactNumber });
  if (sellerPhone) {
    return res.status(400).send("Number already exists");
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const seller = new Seller({
      ...req.body,
      password: await bcrypt.hash(req.body.password, salt),
      role: ADMIN, // Set role to ADMIN for seller registration
    });
    const response = await seller.save();
    res.send(_.pick(response, ["fullName", "shopName", "email", "_id"]));
  } catch (ex) {
    res.status(400).send(ex.message);
  }
}

module.exports = {
    sellerSignIn,
    sellerSignUp,
  };