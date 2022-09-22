
exports.validate = (schema) => {
  try {
    return (req, res, next) => {
      const { error } = schema.validate(req.body, { abortEarly: false,allowUnknown:true });
      if (error) {
        return res.status(422).send(error.details);
      } else {
        return next();
      }
    };
    
  } catch (error) { 
    console.log('error :', error)
  }
};
