// We use express to create our server endpoints and listen for and respond to request from the front end
import express from 'express';
import * as db from './db/index.js';

// We use dot env to access our environment variables
import "dotenv/config";
// Create an instance of express
const requestHandler = express();
// Storing our port value from the .env file
const port = process.env.PORT;
console.log(port);
// the middle ware that allows us to parse json data.
requestHandler.use(express.json());

requestHandler.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});

// get all request handler.


// listed by numbers. or shall i list by population?

// if you dont use it youd lose it.

// find a project youre very intrested in and work on it.

// Request handler.
requestHandler.get("/api/v1/noise-data", async (req, res) => {
    try {
      const populationRankedNoiseData = await fetchNoiseDataRankedByPopulation();
      res.send(populationRankedNoiseData);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });
  
  // Extract the database operation into a separate function
  async function fetchNoiseDataRankedByPopulation() {
    return await db.query(
      "SELECT name, TOT_POP, ROW_NUMBER() OVER (ORDER BY TOT_POP DESC) AS rank " +
      "FROM noise_data ORDER BY rank;"
    );
  }


// get by id request handler.  
requestHandler.get("/api/v1/noise-data/:id", async (req, res) => {
    try {
        // Execute SQL query to fetch noise data by ID
        const results = await db.query(`select * from noise_data where id = $1 RETURNING *;`, [req.params.id]);

        // send query to results.
        res.send(results);
    } catch (error) {

        // Log any errors that occur during the database query
        console.log(error);

        // Send a 500 Internal Server Error response if an error occurs
        res.status(500).send({ message: "Internal Server Error" });
    }
});