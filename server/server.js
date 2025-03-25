//This is the Javascript file where the server for the application will be made
import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import pg from "pg";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // loading environment variables

const app = express();
const port = process.env.port || 3000;
const db = new pg.Client({
    database: "bloghive",
    password: "1234",
    user: "postgres",
    host: "localhost",
    port: 5432
});

db.connect();

app.use(bodyParser.urlencoded({extended: true})); // parse url-encoded data
app.use(bodyParser.json()); // parse JSON request bodies
app.use(cors()); // allow frontend requests



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); // server start