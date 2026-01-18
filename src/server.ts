import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import config from "./config";

const app = express();
app.use(cors());
app.use(express.json());

const startServer = () => {
  try {
    app.listen(config.port, async () => {
      await mongoose.connect(config.database_url!);
      console.log(`server is running on port: ${config.port}`);
    });
  } catch (error) {
    console.log("server failed to start", error);
  }
};

startServer();
