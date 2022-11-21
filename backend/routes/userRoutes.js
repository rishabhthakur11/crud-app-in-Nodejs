const express = require("express");
const {
  home,
  createUser,
  getUsers,
} = require("../controllers/userControllers");
const router = express.Router();

router.get("/", home);
router.post("/createUser", createUser);
router.get("/getUsers", getUsers);

module.exports = router;
