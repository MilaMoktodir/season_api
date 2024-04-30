import { faker } from "@faker-js/faker";
import { storeSeasonData } from "../helpers/helper.js";

export const generateLondonSeasonData = (): AllSeasonData => {
  // Generate random season data

  const generatedSeasonData: AllSeasonData = {
    springSeason : {
    city: "London",
    season: "Spring",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
    },

    summerSeason : {
      city: "London",
      season: "Summer",
      temperature: faker.number.int({ min: -15, max: 30 }),
      humidity: faker.number.int({ min: 79, max: 86 }),
      wind: faker.number.int({ min: 2, max: 78 }),
      rain: faker.number.int({ min: 65, max: 75 }),
    },

    autumnSeason : {
      city: "London",
      season: "Autumn",
      temperature: faker.number.int({ min: -15, max: 30 }),
      humidity: faker.number.int({ min: 79, max: 86 }),
      wind: faker.number.int({ min: 2, max: 78 }),
      rain: faker.number.int({ min: 65, max: 75 }),
    },

    winterSeason : {
      city: "London",
      season: "Winter",
      temperature: faker.number.int({ min: -15, max: 30 }),
      humidity: faker.number.int({ min: 79, max: 86 }),
      wind: faker.number.int({ min: 2, max: 78 }),
      rain: faker.number.int({ min: 65, max: 75 }),
    }

  };

  storeSeasonData(generatedSeasonData).catch(console.error);

  // Return season data
  return generatedSeasonData;
};

export const generateDublinSeasonData = (): AllSeasonData => {
  // Generate random season data
  const generatedSeasonData: AllSeasonData = {

    springSeason : {
    city: "Dublin",
    season: "Spring",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
    },

    summerSeason : {
      city: "Dublin",
      season: "Summer",
      temperature: faker.number.int({ min: -15, max: 30 }),
      humidity: faker.number.int({ min: 79, max: 86 }),
      wind: faker.number.int({ min: 2, max: 78 }),
      rain: faker.number.int({ min: 65, max: 75 }),
    },

    autumnSeason : {
      city: "Dublin",
      season: "Summer",
      temperature: faker.number.int({ min: -15, max: 30 }),
      humidity: faker.number.int({ min: 79, max: 86 }),
      wind: faker.number.int({ min: 2, max: 78 }),
      rain: faker.number.int({ min: 65, max: 75 }),
    },

    winterSeason : {
      city: "Dublin",
      season: "Summer",
      temperature: faker.number.int({ min: -15, max: 30 }),
      humidity: faker.number.int({ min: 79, max: 86 }),
      wind: faker.number.int({ min: 2, max: 78 }),
      rain: faker.number.int({ min: 65, max: 75 }),
    }
  };

  storeSeasonData(generatedSeasonData).catch(console.error);

  return generatedSeasonData;

};


export const generateTokyoSeasonData = (): AllSeasonData => {
  // Generate random season data
  const generatedSeasonData: AllSeasonData = {
    springSeason : {
      city: "Tokyo",
    season: "Spring",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
    },

    summerSeason : {
      city: "Tokyo",
      season: "Summer",
      temperature: faker.number.int({ min: -15, max: 30 }),
      humidity: faker.number.int({ min: 79, max: 86 }),
      wind: faker.number.int({ min: 2, max: 78 }),
      rain: faker.number.int({ min: 65, max: 75 }),
    },

    autumnSeason : {
      city: "Tokyo",
      season: "Autumn",
      temperature: faker.number.int({ min: -15, max: 30 }),
      humidity: faker.number.int({ min: 79, max: 86 }),
      wind: faker.number.int({ min: 2, max: 78 }),
      rain: faker.number.int({ min: 65, max: 75 }),
    },

    winterSeason : {
      city: "Tokyo",
      season: "Winter",
      temperature: faker.number.int({ min: -15, max: 30 }),
      humidity: faker.number.int({ min: 79, max: 86 }),
      wind: faker.number.int({ min: 2, max: 78 }),
      rain: faker.number.int({ min: 65, max: 75 }),
    }
  };

  storeSeasonData(generatedSeasonData).catch(console.error);

  // Return season data
  return generatedSeasonData;
};
