import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

const MONGO_URL = process.env.MONGO_URL;

const connect = async (req, res) => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
};

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("This is root");
});

app.listen(PORT, (req, res) => {
  console.log(`server is listening on http:localhost:${PORT}`);
  connect();
});
