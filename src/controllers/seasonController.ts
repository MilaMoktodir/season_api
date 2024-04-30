import { Request, Response } from "express";
import {
  
  generateLondonSeasonData,
} from "../services/seasonService.js";
import { validationResult } from "express-validator";

/**
 * Gets the season data for a city
 * @param req the request object
 * @param res the response object
 */
export const getSeasonData = async (req: Request, res: Response) => {
  // We will use the validationResult function to check if there are any validation errors
  const errors = validationResult(req);

  // If there are validation errors, we will log them and send a 400 status code
  if (!errors.isEmpty()) {
    console.error("Validation error", errors.mapped());
    res.status(400).json({ errors: errors.array() });
    return;
  }

  // We will use a try catch block to catch any errors
  try {
    // Get the city param from the request
    const { city } = req.params;
    console.log(city);

    // We will create a variable with a type of SeasonData
    let finalSeasonData: AllSeasonData;

    // We will use an if statement to check which city was passed in
    if (city === "london") {
      console.log(generateLondonSeasonData());
      finalSeasonData = generateLondonSeasonData();
    } else if (city === "dublin") {
      finalSeasonData = generateLondonSeasonData();
    }
      else if (city === "tokyo") {
        finalSeasonData = generateLondonSeasonData();
    } else {
      // If the city is not london or dublin or tokyo, we will throw an error
      res.status(404).send("City not found");
    }

    // We will return the season data as JSON
    res.status(200).json(finalSeasonData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send("Error in fetching season data");
  }
};
