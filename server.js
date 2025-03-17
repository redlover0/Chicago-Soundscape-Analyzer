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
    const dbResponse = await db.query("select no, name, tot_pop from noise_data;"); // limit 5
    console.log(dbResponse);
    res.send(dbResponse);
  });

// get by id request handler.  
requestHandler.get("/api/v1/noise-data/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const dbResponse = await db.query(`select * from noise_data where id = ${id};`);
        // res.send(dbResponse);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }  
    if (!dbResponse.rows.length) {
      res.status(404).send({ message: "Not Found" });
      return;
    }});

  // get 