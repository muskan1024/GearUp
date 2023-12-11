const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./index");
const { Product } = require("./models/product");

const connectionString =
  "mongodb+srv://muskanjakirs1024:Gearup23@gearup.yeyrxgv.mongodb.net/GearUp";

mongoose
  .connect(connectionString)
  .then((res) => console.log("Connected to db successfully"))
  .catch((ex) => console.log(ex));

const app = express();

const corsOptions = {
  exposedHeaders: ["x-auth-token", "Authorization"],
};

app.use(cors(corsOptions));

app.use(cors());

app.use(express.json());

app.get('/api/v1/seller/products', async(req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get('/api/v1/seller/products/top-5', async(req, res) => {
  try {
    const products = await Product.find({}, null, { sort: { rating: -1 }, limit: 5 });
    res.json(products);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.use("/", routes);

app.listen(3002, () => console.log("Listening on port 3002....."));