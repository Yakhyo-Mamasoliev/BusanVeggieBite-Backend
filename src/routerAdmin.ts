import express from "express";
const routerAdmin = express.Router(); // we call Router method
import restaurantController from "./controllers/restaurant.controller";

routerAdmin.get("/", restaurantController.goHome); // get method, rooters are associated with endpoints/ endpoints-urls ./signUp

routerAdmin.get("/login", restaurantController.getLogin);

routerAdmin.get("/signup", restaurantController.getSignup);

// to call routers we need to call them
export default routerAdmin; // we use default when we need to use the most commonly or unique. no need to use {}
