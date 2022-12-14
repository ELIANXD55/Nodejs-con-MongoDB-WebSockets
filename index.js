const express = require("express");
const bodyParser = require("body-parser");
const router = require("./network/routes");
const db = require("./db");

db("mongodb+srv://elianxd:LUZUFLOO777@telegrum.jnbuyhs.mongodb.net/?retryWrites=true&w=majority")
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


router(app);


app.use("/app", express.static("public"));
app.listen(3000);
console.log("Server running at http://localhost:3000/");