const Joi = require('joi');
const validateRequest = require("../../../utils/validateRequest");

module.exports = async (req, res, next) => {
    const schema = Joi.object({
        provider_id: Joi.string()
            .required(),

        provider_name: Joi.string()
            .required(),

        first_name: Joi.string()
            .min(3)
            .max(30)
            .required(),

        last_name: Joi.string()
            .min(2)
            .max(30)
            .required(),

        email: Joi.string()
            .email({ tlds: { allow: true } })
            .required(),
    });

    validateRequest(req, next, schema);
}