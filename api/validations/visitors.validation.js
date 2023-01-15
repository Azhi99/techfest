
const Joi = require('@hapi/joi');
function validationForm(reques) {
    const schema = Joi.object({
        visitor_id: Joi.number().integer(),visitor_full_name: Joi.string().required(),visitor_phone: Joi.string().required(),visitor_code: Joi.string().required(),
    });
    return schema.validate(reques)
}
module.exports = validationForm;
        