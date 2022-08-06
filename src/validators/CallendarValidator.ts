import Joi from 'joi';

const dateValidator = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;
const timeValidator = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

const calendarValidator = Joi.object({
  client: Joi.string().max(30).required().messages({
    'string.base': 'O campo cliente precisa ser um texto (string)',
    'string.empty': 'O campo cliente não pode ser nulo',
    'string.max': 'O campo cliente não pode ter mais de {#limit} caracteres',
  }),
  gender: Joi.string().min(1).max(1).required().messages({
    'string.base': 'O campo genêro precisa ser um texto (string)',
    'string.empty': 'O campo genêro não pode ser nulo',
    'string.max': 'O campo genêro não pode ter mais de {#limit} caracteres',
  }),
  date: Joi.string()
    .required()
    .max(10)
    .pattern(new RegExp(dateValidator))
    .messages({
      'string.base': 'O campo date precisa ser um texto (string)',
      'string.empty': 'O campo date não pode ser nulo',
      'string.max': 'O campo data não pode ter mais de {#limit} caracteres',
      'string.pattern.base':
        'O campo data precisa estar no padrão dd/mm/yyyy | dd.mm.yyyy | dd-mm-yyy | ddmmyyyy',
    }),
  time: Joi.string()
    .max(5)
    .pattern(new RegExp(timeValidator))
    .required()
    .messages({
      'string.base': 'O campo horário precisa ser um texto (string)',
      'string.empty': 'O campo horário não pode ser nulo',
      'string.max': 'O horário data não pode ter mais de {#limit} caracteres',
      'string.pattern.base': 'O campo data precisa estar no padrão HH:MM',
    }),
  service: {
    create: {
      serviceName: Joi.string().required().messages({
        'string.base': 'O campo nome do serviço precisa ser um texto (string)',
        'string.empty': 'O campo nome do serviço não pode ser nulo',
      }),
      price: Joi.number().required(),
    },
  },
})
  .with('client', 'gender')
  .with('date', 'time')
  .with('service_name', 'price');

export default calendarValidator;
