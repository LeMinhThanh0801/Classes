const mongoose = require('mongoose');

const classesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    teacherName: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('classes', classesSchema);
