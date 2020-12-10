const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.render("main");
});

module.exports = router;