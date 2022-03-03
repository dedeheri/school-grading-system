const teacher = require("../model/Teacher");

const confirmAccount = async (req, res, next) => {
  const id = req.user.id;
  const confirm = await teacher.findOne({ authId: id });
  if (confirm == null || confirm.accountConfirmation == false) {
    return res
      .status(401)
      .json({ massage: "Wait for the staff to confirm your account" });
  }

  next();
};

module.exports = confirmAccount;
