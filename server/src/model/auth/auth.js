const mongoose = require("mongoose");

const auth = new mongoose.Schema(
  {
    identityNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const authModel = mongoose.model("auth", auth);
module.exports = authModel;
