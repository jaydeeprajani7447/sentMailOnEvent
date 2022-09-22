const express = require("express");
const router = express.Router();
const { login } = require("../Controller/sendMailController");
const {sentEmailDataValidation} =  require("../Middleware/joiFormat")
const {validate} = require("../Middleware/validator.js");

// router.post("/sendMail", (req, res) => {
//   try {
//     display;
//     console.log("req.body:", req.body);
//   } catch (err) {
//     console.log(err), res.status(500).json({ message: err });
//   }
// });

router.post("/login", validate(sentEmailDataValidation), login);
module.exports = router;
