//This is the Javascript file where the server for the application will be made
import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import pg from "pg";
import cors from "cors"; // to allow requests from the React frontend
import dotenv from "dotenv"; // for the database credentials
import bcrypt from "bcrypt"; //for encrypting and hashing passwords entered by the user on the client side


dotenv.config(); // loading environment variables

const app = express();
const port = process.env.PORT || 3000;
const db = new pg.Client({
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});
const saltRounds = 10;

db.connect();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//Creating new users
app.post("/signup", async (req, res) => {
    const {
        email,
        password,
        firstName,
        lastName
    } = req.body;
    try {
        const checkResult = await db.query("SELECT * FROM user_info WHERE user_email = $1", [email]);
        if(checkResult.rows.length > 0) {
            console.log("There's an user registered with this email already.");
        } else {
            bcrypt.hash(password, saltRounds, async (err, hash) => {
                if(err) {
                    console.log("There's been an issue: ", err);
                } else {
                    const result = await db.query("INSERT INTO user_info (user_email, user_password, user_first_name, user_last_name) VALUES ($1, $2, $3, $4)", [email, hash, firstName, lastName]);
                    console.log(result);
                }
            });
        }
    } catch (error) {
        console.log("There's been an issue: ", error);
    }

    
});

//Authenticating users when logging in
app.post("/login", async (req, res) => {
    const {
        email,
        password
    } = req.body;
    
    try {
        const checkForUser = await db.query("SELECT * FROM user_info WHERE user_email = $1", [email]);
        const hashedPassword = checkForUser.rows[0].user_password;

        if(checkForUser.rows.length > 0) {

            console.log("There's an user using that email address");
            console.log("We'll try logging you in");
            bcrypt.compare(password, hashedPassword, (err, result) => {
                if(err) {
                    console.log("There's been an error: ", err);
                } else if (result) {
                    console.log("You're logged in");
                } else {
                    console.log("Wrong password, dummy. Try again later.");
                }
            });
        }

    } catch(error) {
        console.log("There's been an issue: ", error);
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); // server start