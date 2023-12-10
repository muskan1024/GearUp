const express = require("express");

const router = express.Router();
const { userSignUp, userSignIn } = require("./controllers/userController");
const { sellerSignUp, sellerSignIn } = require("./controllers/sellerController")
const noAuth = require("./middleware/noAuth");
const { createProduct } = require("./controllers/product");


//User Authentication
router.post("/api/v1/users", userSignUp);
router.post("/api/v1/auth", userSignIn);

// Seller Authentication
router.post("/api/v1/sellers/signup", sellerSignUp);
router.post("/api/v1/sellers/signin", sellerSignIn);

//Add Product
router.post("/api/v1/seller/manageproducts/addproducts", createProduct );
module.exports = router;