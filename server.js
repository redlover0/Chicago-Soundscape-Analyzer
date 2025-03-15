// We use express to create our server endpoints and listen for and respond to request from the front end
import express from 'express';
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

requestHandler.get('/api/v1/get-template', (req, res) => {
        res.send('Hello World');
});