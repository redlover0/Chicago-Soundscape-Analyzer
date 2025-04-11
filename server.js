// We use express to create our server endpoints and listen for and respond to request from the front end
import express from 'express';

import "dotenv/config";
import {fetchNoiseDataRankedByPopulation, fetchNoiseDataById} from "./db/noiseDataQueries.js";

// Create an instance of express
const requestHandler = express();

// Storing our port value from the .env file
const port = process.env.PORT || 3000; // Default to 3000 if no port is specified
console.log(port);

// the middleware that allows us to parse json data.
requestHandler.use(express.json());

requestHandler.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// get all request handler.
requestHandler.get("/api/v1/noise-data", async (req, res) => {
    try {
        const populationRankedNoiseData = await fetchNoiseDataRankedByPopulation();
        res.send(populationRankedNoiseData.rows); // Send rows directly for the response
    } catch (error) {
        console.error("Error fetching noise data:", error);
        res.status(500).send({message: "Internal Server Error"});
    }
});

// get by id request handler.
requestHandler.get("/api/v1/noise-data/:id", async (req, res) => {
    try {
        // Execute SQL query to fetch noise data by ID
        const results = await fetchNoiseDataById(req.params.id);

        if (!results.rows.length) {
            // If no matching data is found, send a 404 response
            res.status(404).send({message: "Data not found"});
        } else {
            // send all results if found
            res.send(results.rows); // did say return only the first result as response
        }
    } catch (error) {
        console.error("Error fetching noise data by ID:", error.message); // Log the error message
        res.status(500).send({message: "Internal Server Error"});
    }
});