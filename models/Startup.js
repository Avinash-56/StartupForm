const mongoose = require("mongoose");

const StartupSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  website: {
    type: String,
    required: true,
  },
  stage: {
    type: String,
    required: true,
  },
  profit: {
    type: String,
    required: true,
  },
  founded: {
    type: Date,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  fOrb: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  founder: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Startup = mongoose.model("startup", StartupSchema);
