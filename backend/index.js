const express = require("express");

const router = express.Router();
const { userSignUp, userSignIn } = require("./controllers/userController");
const { sellerSignUp, sellerSignIn } = require("./controllers/sellerController")
const admin = require("./middleware/admin");
const auth = require("./middleware/auth");

//User Authentication
router.post("/api/v1/users", userSignUp);
router.post("/api/v1/auth", userSignIn);

// Seller Authentication
router.post("/api/v1/sellers/signup", sellerSignUp);
router.post("/api/v1/sellers/signin", sellerSignIn);
module.exports = router;