//  doim controllerlarni objectlar orqali hosil qilamiz

import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {};

// creating goHome method
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page");
  } catch (err) {
    console.log("Error, go home:", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page");
  } catch (err) {
    console.log("Error, Login Page:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("SignUp Page");
  } catch (err) {
    console.log("Error, SignUp Page:", err);
  }
};

//member controllerni rooterda chaqirvolishlik uchun
export default restaurantController;
