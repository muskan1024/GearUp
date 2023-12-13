const express = require("express");

const router = express.Router();
const { userSignUp, userSignIn } = require("./controllers/userController");
const { sellerSignUp, sellerSignIn } = require("./controllers/sellerController")
const { saveProduct, searchProducts, getProductById, getProductCategories, saveCategory } = require("./controllers/product");


//User Authentication
router.post("/api/v1/users", userSignUp);
router.post("/api/v1/auth", userSignIn);

// Seller Authentication
router.post("/api/v1/sellers/signup", sellerSignUp);
router.post("/api/v1/sellers/signin", sellerSignIn);

//Add Product
router.post("/api/v1/seller/products", saveProduct );
router.post("/api/v1/seller/products/category", saveCategory);
router.get("/api/v1/seller/products", searchProducts);
router.get("/api/v1/seller/products/categories/:category", getProductCategories);
router.get("/api/v1/seller/products/:id", getProductById);

module.exports = router;