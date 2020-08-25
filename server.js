const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect to database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("API Running"));

//Define routes
//Make /api/users pertain to the route in users.js
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
