import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';


import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend/dist")));

const PORT = 8000;
const MONGO_URL = "mongodb+srv://sangammunde3:69ZEogw3grwMXHyk@cluster0.7e0zod4.mongodb.net/book-store";


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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});


app.listen(PORT, (req, res) => {
  console.log(`server is listening on http:localhost:${PORT}`);
  connect();
});
