const mongoose = require("mongoose");

const dbConnect = () => {
  //------------------------------------------------Database Connection-----------------------------------------------------------------------
  const dbUrl =
    "mongodb+srv://akshatabhimnale:akshatabhimnale@bookkeepingapp.qmmvowh.mongodb.net/?retryWrites=true&w=majority";
  mongoose
    .connect(dbUrl, {
      useUnifiedTopology: true,

      useNewUrlParser: true,
    })
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
};
module.exports = dbConnect;
