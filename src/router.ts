import express from "express";
const router = express.Router(); // we call Router method
import memberController from "./controllers/member.controller";

router.get("/", memberController.goHome); // get method, rooters are associated with endpoints/ endpoints-urls ./signUp

router.get("/login", memberController.getLogin);

router.get("/signup", memberController.getSignup);

// to call routers we need to call them
export default router; // we use default when we need to use the most commonly or unique. no need to use {}
