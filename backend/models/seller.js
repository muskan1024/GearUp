const mongoose = require("mongoose");
const Joi = require("joi");
const { ADMIN } = require("../constants");

const Seller = mongoose.model(
    "seller",
    new mongoose.Schema({
        fullName: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 50,
          },
          shopName: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 50,
          },
          contactNumber: {
            type: Number,
            min: 1000000000,
            required: true,
            unique: true,
          },
          alternateNumber: {
            type: Number,
            min: 1000000000,
            unique: true,
          },
          email: {
            type: String,
            required: true,
            unique: true,
            minLength: 5,
            maxLengh: 255,
          },
          address: {
            type: String,
            required: true,
            minLength: 10,
            maxLength: 200,
          },
          password: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 1024,
          },
          role: {
            type: String,
            enum: [ADMIN],
            default: ADMIN,
          },
    },{ timestamps: true })
);

const validateSeller = (seller) => {
    const sellerSchema = Joi.object({
      fullName: Joi.string().min(0).max(50).required(),
      shopName: Joi.string().min(0).max(50).required(),
      contactNumber: Joi.string().min(10).max(10).required(),
      alternateNumber: Joi.string().min(10).max(10),
      email: Joi.string().email().min(5).max(255).required(),
      address: Joi.string().min(10).max(200).required(),
      password: Joi.string().min(5).max(50).required(),
      role: Joi.string().valid(ADMIN).default(ADMIN),
    });

    const validationResult = sellerSchema.validate(seller);
    return validationResult;
};

module.exports = { Seller, validateSeller };