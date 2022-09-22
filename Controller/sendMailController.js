const sentMailData = require("../models/email");
const { sendMail } = require("../Helper/sendMail");

const login = async (req, res) => {
  try {
    let mailListDetails = {
      to: req.body.email,
      // cc: req.body.cc,
      subject: "Account logged in successfully",
      text: "Welcome to your account..!, If you didn't signed in, you should report the activity.",
      date: Date.now(),
    };

    let sendEmail = await sendMail(mailListDetails);
    if (!sendEmail) {
      console.log(err);
      return res.status(400).json({ message: "err" });
    }
    {
      const emailExisted = await sentMailData.findOneAndUpdate(
        { sender: process.env.SENDER },
        {
          sender: process.env.SENDER,
          $addToSet: { sentMailList: mailListDetails },
        },
        { new: true, upsert: true }
      );

      console.log("Email sent successfully");
      return res
        .status(200)
        .json({ message: "Email sent successfully", mailListDetails });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server Error" });
  }
};

module.exports = {
  login,
};
