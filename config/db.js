const mongoose = require("mongoose");
//import the config package
const config = require("config");
//get the mongo uri using the above package
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    console.log("Mongo DB connected");
  } catch (err) {
    console.error(err.message);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
