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

// exports.createProduct = async (req, res) => {
//   const { prodName, category, price, description, manufacturer, availableItems, imageURL } = req.body;

//   const newProduct = new Product({
//     prodName,
//     category,
//     price,
//     description,
//     manufacturer,
//     availableItems,
//     imageURL
//   });

//   try {
//     const savedProduct = await newProduct.save();
//     res.status(200).json({
//       success: true,
//       message: "Product added successfully!",
//       product: savedProduct,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: "Error adding product!",
//     });
//   }
// };

module.exports ={
  saveProduct
}