const Joi = require('@hapi/joi');

function validationForm(reques) {
    const schema = Joi.object({
        visitor_id: Joi.number().integer(),
        visitor_full_name: Joi.string().required(),
        visitor_phone: Joi.string().required(),
        visitor_code: Joi.string().optional().allow(null, ''),
        city_id: Joi.number().integer().required(),
        user_id: Joi.number().integer().optional(),
        visitor_type: Joi.string().required(),
    });
    return schema.validate(reques)
}
module.exports = validationForm;