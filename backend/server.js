// We use express to create our server endpoints and listen for and respond to request from the front end
import express from 'express';
import cors from 'cors';

import "dotenv/config";
import {
    fetchNoiseDataById,
    fetchNoiseDataRankedByPopulation,
    fetchRandomNoiseData,
    searchCommunityName
} from "./db/noiseDataQueries.js";

// Create an instance of express
const requestHandler = express();

// Storing our port value from the .env file
const port = process.env.PORT || 3123; // Default to 3000 if no port is specified
console.log(port);

requestHandler.use(cors())

// the middleware that allows us to parse json data.
requestHandler.use(express.json());

requestHandler.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


requestHandler.get("/api/v1/noise-data/search", async (req, res) => {
    try {
        const {name} = req.query;
        if (!name) {
            return res.status(400).json({
                error: `This communityName doesn't exist: ${name}`
            });
        } else {
            const results = await searchCommunityName(name);
            console.log(results.rows);
            if (results.rows.length) {
                return res.status(200).json({
                    results: results.rows
                });
            } else {
                return res.status(404).json({
                    error: 'no search results found.'
                });
            }
        }}
    catch(err) {
        console.error(err);
        return res.status(500).json({
            error: "Internal Server Error",

        })
    }
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

requestHandler.get("/api/v1/noise-data/random/:id", async (req, res) => {
    try{
        const randomNoiseData = await fetchRandomNoiseData();
        res.send(randomNoiseData.rows);
    } catch (e) {
        console.error(e);
        console.error("Error fetching random noise data on route '/api/v1/noise-data/random/:id:' ", e);
        res.status(500).send({message: "Internal Server Error, Error fetching random noise data"});
    }
})

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