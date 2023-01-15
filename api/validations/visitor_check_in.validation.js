
const Joi = require('@hapi/joi');
function validationForm(reques) {
    const schema = Joi.object({
        visitor_check_in_id: Joi.number().integer(),visitor_id: Joi.number().required(),visitor_check_in_date_time: Joi.date().required(),
    });
    return schema.validate(reques)
}
module.exports = validationForm;
        