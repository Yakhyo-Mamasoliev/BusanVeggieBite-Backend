import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

router.post("/login", memberController.login); // call
router.post("/signup", memberController.signup); // call

export default router;
