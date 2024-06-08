import express from "express";
const router = express.Router(); // we call Router method
import memberController from "./controllers/member.controller";

// to call routers we need to call them
export default router; // we use default when we need to use the most commonly or unique. no need to use {}
