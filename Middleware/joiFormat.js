const Joi = require("joi");
const { validate } = require("../models/email");

const sentEmailDataValidation = 
  Joi.object().keys({
  
  email: Joi.string().lowercase().email({ minDomainSegments: 2 }).required(),

  // cc: Joi.array().items(
  //   Joi.string().lowercase().email({ minDomainSegments: 2 })
  // ),
})

module.exports = {
  sentEmailDataValidation,
};
