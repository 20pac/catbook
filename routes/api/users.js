const express = require("express");
const router = express.Router();
//Middleware to validate the incoming data
const { check, validationResult } = require("express-validator");

//@route   POST api/users
//@desc    Tes route
//@access  Public
router.post(
  "/",
  [
    //Validation rules
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password must be atleast 6 charecters long").isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("User route");
  }
);

module.exports = router;
