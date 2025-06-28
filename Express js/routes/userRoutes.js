const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//Get all users
router.get("/", userController.getUsers);

//post a new user
router.post("/", userController.addUser);

module.exports = router;
