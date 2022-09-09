const Joi = require('joi');
const { parachainId } = require('./custom.validation');

const createData = {
  body: Joi.object().keys({
    requests: Joi.number().required(),
    name: Joi.string().required().custom(parachainId),
  }),
};

const getData = {
  query: Joi.object().keys({
    name: Joi.string(),
    requests: Joi.number(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

// const getUser = {
//   params: Joi.object().keys({
//     userId: Joi.string().custom(objectId),
//   }),
// };

// const updateUser = {
//   params: Joi.object().keys({
//     userId: Joi.required().custom(objectId),
//   }),
//   body: Joi.object()
//     .keys({
//       email: Joi.string().email(),
//       password: Joi.string().custom(password),
//       name: Joi.string(),
//     })
//     .min(1),
// };

// const deleteUser = {
//   params: Joi.object().keys({
//     userId: Joi.string().custom(objectId),
//   }),
// };

module.exports = {
  createData,
  getData,
};
