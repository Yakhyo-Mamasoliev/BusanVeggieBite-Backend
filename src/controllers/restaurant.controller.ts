// we always create controllers using Object

import { Request, Response } from "express"; // Import Request and Response types from Express
import { T } from "../libs/types/common"; // Import common types
import MemberService from "../models/Member.service"; // Import MemberService model

const restaurantController: T = {}; // Define an empty object for restaurant controller

// creating goHome method
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page"); // Send "Home Page" response
  } catch (err) {
    console.log("Error, go home:", err); // Log error if any
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page"); // Send "Login Page" response
  } catch (err) {
    console.log("Error, Login Page:", err); // Log error if any
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("SignUp Page"); // Send "SignUp Page" response
  } catch (err) {
    console.log("Error, SignUp Page:", err); // Log error if any
  }
};

export default restaurantController; // Export the restaurant controller for use in routers
