import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
import uploader from "./libs/utils/uploader";

//** Member */
router.post("/member/login", memberController.login); // call
router.post("/member/signup", memberController.signup); // call
router.post(
  "/member/logout",
  memberController.verifyAuth,
  memberController.logout
); // call
router.get(
  "/member/detail",
  memberController.verifyAuth,
  memberController.getMemberDetail
); // call
router.post(
  "/member/update",
  memberController.verifyAuth,
  uploader("members").single("memberImage"),
  memberController.updateMember
); // call
router.get("/member/top-users", memberController.getTopUsers)

//** Product */

//** Order */

export default router;
