const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().allow("", null),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().min(0),
  }).required(),
});
