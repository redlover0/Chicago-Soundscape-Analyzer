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
requestHandler.get("/api/v1/noise-data", async (req, res) => {
    try {
        const dbResponse = await db.query("SELECT name, TOT_POP, ROW_NUMBER() OVER (ORDER BY TOT_POP DESC) AS rank FROM noise_data ORDER BY rank;");
        console.log(dbResponse);
        res.send(dbResponse);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

// get by id request handler.  
requestHandler.get("/api/v1/noise-data/:id", async (req, res) => {
    const id = [req.params.id]
    try {
        const results = await db.query(`select * from noise_data where id = $1 RETURNING *;`, [req.params.id]);
        res.send(results);
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

// requestHandler.get("/api/v1/noise-data", async (req, res) => {
//     const dbResponse = await db.query("SELECT name, noiseLUR, TOT_POP, ROW_NUMBER() OVER (ORDER BY TOT_POP DESC) AS rank FROM noise_data ORDER BY rank;");
//     console.log(dbResponse);
//     res.send(dbResponse);
// });