//  doim controllerlarni objectlar orqali hosil qilamiz

import { Request, Response } from "express";
import { T } from "../libs/types/common";
const memberController: T = {};

// creating goHome method
memberController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page");
  } catch (err) {
    console.log("Error, go home:", err);
  }
};

memberController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page");
  } catch (err) {
    console.log("Error, Login Page:", err);
  }
};

memberController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("SignUp Page");
  } catch (err) {
    console.log("Error, SignUp Page:", err);
  }
};

//member controllerni rooterda chaqirvolishlik uchun
export default memberController;
