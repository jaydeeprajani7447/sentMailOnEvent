const mongoose = require("mongoose");
// const { default: mongoose } = require('mongoose');

let sentEmailDataSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
    // unique: true,
  },
  // password: {
  //   type: String,
  //   required: true,
  // },
  sentMailList: [
    {
      to: { type: String },
      cc: {
        type: [String],
        default: "null",
      },
      subject: { type: String },
      text: { type: String },
      date: { type: Date },
    },
  ],
});

module.exports = mongoose.model("sentMailData", sentEmailDataSchema);
