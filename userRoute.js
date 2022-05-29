const express = require("express");
const router = express.Router();
const {
    ClientAdd,
} = require("../Controllers/userController");
//load controller

router.post("/add", ClientAdd);
module.exports = router;