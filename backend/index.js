import mongoose from "mongoose";
import express from "express";
// import routes from "./routes";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./src/db/moongooseDb.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World");
    }
);
app.listen(PORT, async () => {
  try {
    await dbConnect(MONGO_URI, PORT);
    console.log(`Server listening at ${PORT}`);
  } catch (error) {
    console.error(error);
  }
}
);

