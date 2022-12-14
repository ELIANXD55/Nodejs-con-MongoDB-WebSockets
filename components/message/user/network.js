const express = require("express");
const response = require("../../../network/response");
const controller = require("./controller");
const router = express.Router();


router.post("/", function (req, res) {
    controller.addUser(req.body.name)
    .then((data) => {
        response.success(req, res, data, 201);
    })
    .catch((e) => {
        response.error(req, res, "Internal Error", 500, e);
    });
});

router.get("/", function (req, res) {
    const User = req.query.user || null;
    controller
      .getUser(User)
      .then((messageList) => {
        response.success(req, res, messageList, 200);
      })
      .catch((e) => {
        response.error(req, res, "Unexpected Error", 500, e);
      });
  });

module.exports = router;