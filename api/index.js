import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(3001, () => {
  console.log("Server is running on port 3001!");
});

app.use("/api/user", userRoutes);
