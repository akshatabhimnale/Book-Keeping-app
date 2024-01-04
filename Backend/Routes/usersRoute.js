const express = require("express");
const User = require("../Models/User");
const usersRoute = express.Router();

//Register user
usersRoute.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    console.log(user);
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});
//login user
usersRoute.post("/login", (req, res) => {
  res.send("Login route");
});
//update user
usersRoute.put("/update", (req, res) => {
  res.send("Update route");
});
//delete user
usersRoute.delete("/:id", (req, res) => {
  res.send("Delete route");
});
//fetch user
usersRoute.get("/", (req, res) => {
  res.send("Fetched Users");
});
module.exports = usersRoute;
