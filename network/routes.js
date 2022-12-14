const express = require("express");


const routes = function (server) {
    server.use("/message", require("../components/message/network"));
};

module.exports = routes;