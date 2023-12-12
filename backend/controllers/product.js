const { Category } = require("../models/category");
const { Product } = require("../models/product");

async function saveProduct(req, res) {
  const requestBody = req.body;

  const product = new Product(requestBody)
  try {
      const savedProduct = await product.save();
      res.send(savedProduct); 
  }  catch(ex) {
      return res.status(400).send(ex.message);
  }
}
async function saveCategory(req, res) {
  const requestBody = req.body;

  const category = new Category(requestBody)
  try {
      const savedCategory = await category.save();
      res.send(savedCategory); 
  }  catch(ex) {
      return res.status(400).send(ex.message);
  }
}

async function searchProducts(req, res) {
  const { category, direction = "desc", sortBy = "_id", name="" } = req.query;

  const searchObj = {};

  if (category) searchObj.category = category;
  searchObj.name = { $regex: name, $options: "i" }

  const products = await Product.find(searchObj).sort({ [sortBy]: direction });

  res.send(products);
}

async function getProductById(req, res) {
  let product = await Product.findById(req.params.id);

  if(!product) {
      res.status(404).send(`Product with id ${req.params.id} not found`);
      return;
  }

  res.send(product);
}

async function getProductCategories(req, res) {
  const category = req.params.category || req.body.category;

  try {
    const products = await Product.find({ category });

    if (!products.length) {
      return res.status(404).send({ message: "No products found in this category" });
    }

    res.send(products);
  } catch (ex) {
    console.error(ex.message);
    res.status(500).send({ message: "Error occurred while fetching products" });
  }
}  

function searchProductsByCategory(req, res) {
  const categoryId = req.params.id;

  Product.find({ category: categoryId }).then((products) => {
    res.json(products);
  }).catch((err) => {
  });
}


module.exports ={
  saveProduct,
  saveCategory,
  searchProducts,
  getProductById,
  getProductCategories,
  searchProductsByCategory
}