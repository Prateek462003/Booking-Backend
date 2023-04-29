const router = require("express").Router();

const {register, login} = require("../controllers/auth.js");

// Register and Login Controllers
router.post("/register", register);
router.post("/login", login);

module.exports =  router;
