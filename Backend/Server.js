const express = require("express");
const mongoose = require("mongoose");
const User = require("./Models/User");
const usersRoute = require("./Routes/usersRoute");
const error = require("./Middlewares/errorMiddlewareHandler");
require("./Config/dbConnect")();
const app = express();

//console.log(app);
//-------------------------------------------------Passing body data------------------------------------------------------------------------
app.use(express.json());
//------------------------------------------------Routes------------------------------------------------------------------------------------
app.use("/api/users", usersRoute);
//-------------------------------------------------User Routes------------------------------------------------------------------------------

//-------------------------------------------------server-----------------------------------------------------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`server is running ${PORT}`);
});
