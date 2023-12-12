const mongoose = require("mongoose");

const Category = mongoose.model(
  "category",
  new mongoose.Schema(
    {
        categoryName:{
            type: String ,
            required : true,
        },
        categoryImage:{
            type: String,
            required : true,
        },
    },
    { timestamps: true }
  )
);

module.exports = { Category };
