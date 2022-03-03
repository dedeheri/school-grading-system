const mongoose = require("mongoose");

const requireValidation = {
  required: true,
  trim: true,
};
const staff = mongoose.Schema(
  {
    codeStaff: {
      ...requireValidation,
      type: String,
    },
    authId: {
      ...requireValidation,
      type: String,
    },
    identityNumber: {
      ...requireValidation,
      type: Number,
    },
    fullName: {
      ...requireValidation,
      type: String,
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "address",
    },
    role: {
      ...requireValidation,
      type: String,
    },
  },
  { timestamps: true }
);

const staffModel = mongoose.model("staffProfil", staff);
module.exports = staffModel;
