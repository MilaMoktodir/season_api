import express from "express";
import seasonRoute from "./routes/seasonRoute.js";

// We will create an express app
const app = express();

// The port that the express server will listen on
const PORT = 3000;

app.use(express.json());


// We define our first route

app.use("/api/season", seasonRoute);

// Start the express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

