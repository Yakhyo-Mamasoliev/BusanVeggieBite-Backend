import dotenv from "dotenv";
dotenv.config(); // we are executing dotenv.config() to load the .env file

console.log("PORT:", process.env.PORT);

console.log("PORT:", process.env.MONGO_URL);
