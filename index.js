const express = require("express");
const app = express();
const server = require("http").Server(app);
const bodyParser = require("body-parser");
const router = require("./network/routes");
const db = require("./db");
const socket = require("./socket");
const cors = require("cors");

db("mongodb+srv://elianxd:LUZUFLOO777@telegrum.jnbuyhs.mongodb.net/?retryWrites=true&w=majority")
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
socket.connect(server);

router(app);


app.use("/app", express.static("public"));
server.listen(3000);
console.log("Server running at http://localhost:3000/");

