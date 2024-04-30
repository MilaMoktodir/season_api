import express from "express";
import { validateCityName } from "../middleware/validators.js";
import { getSeasonData } from "../controllers/seasonController.js";

// We will create a router object
const router = express.Router();

// We will create a route for the season data based on the city name
router.get("/:city", validateCityName, getSeasonData);

// We will export the router
export default router;
