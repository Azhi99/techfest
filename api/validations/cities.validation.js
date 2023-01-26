const Joi = require('@hapi/joi');

function validationForm(reques) {
    const schema = Joi.object({
        city_id: Joi.number().integer(),
        city_name: Joi.string().required(),
    });
    return schema.validate(reques)
}
module.exports = validationForm;