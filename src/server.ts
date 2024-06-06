import dotenv from "dotenv";
dotenv.config();
// we are executing dotenv.config() to load the .env file

// console.log("PORT:", process.env.PORT);
// console.log("PORT:", process.env.MONGO_URL);

import mongoose from "mongoose";

import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.log(`The server is running successfully on port: ${PORT}`);
    });
  })
  .catch((err) => console.log("MongoDB connection failed", err));
