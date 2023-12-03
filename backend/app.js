const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./index");

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

app.use("/", routes);

app.listen(3002, () => console.log("Listening on port 3002....."));