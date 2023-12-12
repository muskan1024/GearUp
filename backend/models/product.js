const mongoose = require("mongoose");

const Product = mongoose.model(
  "product",
  new mongoose.Schema(
    {
      // sellerName: {
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: "Seller",
      //   required: true,
      // },
      isAdmin: {
        type: Boolean,
        default: true,
      },
      prodName: {
        type: String,
        required: true,
      },
      category: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Category",
        type: String,
        required: true,
      },
      categoryName: {
        type: String,
        virtual: true,
        get: function () {
          return this.populate({ path: "category", select: "categoryName" }).then(() => this.category.categoryName);
        },
      },
      price: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
      },
      manufacturer: {
        type: String,
      },
      availableItems: {
        type: Number,
        required: true,
      },
      imageURL: {
        type: String,
      },
    },
    { timestamps: true }
  )
);

module.exports = { Product };
