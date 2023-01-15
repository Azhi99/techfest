
const Joi = require('@hapi/joi');
function validationForm(reques) {
    const schema = Joi.object({
        user_id: Joi.number().integer(),user_name: Joi.string().required(),password: Joi.string().required(),
    });
    return schema.validate(reques)
}
module.exports = validationForm;
        