const express = require("express");
const mongoose = require("mongoose");
require("./Config/dbConnect")();
const app = express();
//console.log(app);

//------------------------------------------------Routes------------------------------------------------------------------------------------

//-------------------------------------------------User Routes------------------------------------------------------------------------------
//Register user
app.post("/api/users/register", (req, res) => {
  res.send("Register route");
});
//login user
app.post("/api/users/login", (req, res) => {
  res.send("Login route");
});
//update user
app.put("/api/users/update", (req, res) => {
  res.send("Update route");
});
//delete user
app.delete("/api/users/:id", (req, res) => {
  res.send("Delete route");
});
//fetch user
app.get("/api/users", (req, res) => {
  res.send("Fetched Users");
});
//-------------------------------------------------server-----------------------------------------------------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`server is running ${PORT}`);
});
