import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

//** Member */
router.post("/member/login", memberController.login); // call
router.post("/member/signup", memberController.signup); // call
router.post(
  "/member/logout",
  memberController.verifyAuth,
  memberController.logout
); // call
router.get("/member/detail", memberController.verifyAuth); // call

//** Product */

//** Order */

export default router;
