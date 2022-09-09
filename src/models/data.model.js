const mongoose = require('mongoose');
// const validator = require('validator');
// const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

// New Schema for Data Model

const dataSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    requests: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
dataSchema.plugin(toJSON);
dataSchema.plugin(paginate);

// dataSchema.pre('save', async function (next) {
//   const data = this;
//   next();
// });

/**
 * @typedef Data
 */
const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
