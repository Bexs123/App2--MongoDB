require("dotenv").config();

const express = require("express");
const router = require("./routes/coffee");
const { connection } = require("./connection");
const app = express();

app.use(express.json())
app.use(router)

app.listen(process.env.HTTP_PORT || 80, () => {
    connection.once("open", () => {
        console.log("MongoDB database connection established sucessfully")
        console.log("App online")
    });
});