import mongoose from "mongoose";
import express from "express";
// import routes from "./routes";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./src/db/moongooseDb.js";
import UserRouter from "./src/routes/user.js";
import EventRouter from "./src/routes/event.js";

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

//routes
app.use("/", UserRouter);
app.use("/event", EventRouter);
app.listen(PORT, async () => {
  try {
    await dbConnect(MONGO_URI, PORT);
    console.log(`Server listening at ${PORT}`);
  } catch (error) {
    console.error(error);
  }
}
);

