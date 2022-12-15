const express = require("express");


const routes = function (server) {
    server.use("/message", require("../components/message/network"));
    server.use("/user", require("../components/message/user/network"));
    server.use("/chat", require("../components/message/chat/network"));
};

module.exports = routes;