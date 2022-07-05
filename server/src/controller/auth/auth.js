const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const authModel = require("../../model/auth/auth");
const streetModel = require("../../model/street");
const teacherModel = require("../../model/Teacher");
const staffModel = require("../../model/staff");
const jwt = require("jsonwebtoken");
const studentModel = require("../../model/student");

const signUpStaff = async (req, res) => {
  const fullName = req.body.fullName;
  const identityNumber = req.body.identityNumber;
  const password = req.body.password;
  const province = req.body.province;
  const city = req.body.city;
  const street = req.body.street;
  const postelCode = req.body.postelCode;
  const email = req.body.email;
  const role = "Staff";

  const auth = await authModel.findOne({ identityNumber });

  // Identity Number
  if (auth) {
    return res.status(422).json({ message: "Identity Number Already Exist" });
  }

  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(422).json({ validation: errors.array() });

  // password hash
  const passwordHash = await bcrypt.hash(password, 10);
  try {
    const data = new authModel({
      identityNumber,
      password: passwordHash,
      role,
    });
    const streetData = new streetModel({
      province,
      city,
      street,
      postelCode,
    });
    const profile = new staffModel({
      fullName,
      authId: data._id,
      identityNumber: data.identityNumber,
      address: streetData._id,
      email,
    });
    const auths = await data.save();
    const profiles = await profile.save();
    await streetData.save();

    return res.status(200).json({
      message: "Success",
      users: {
        _id: profiles._id,
        identityNumber: auths.identityNumber,
        fullName: profiles.fullName,
        email: profiles.email,
        role: auths.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const verifyStudent = async (req, res) => {
  const identityNumber = req.body.identityNumber;

  const student = await studentModel.findOne({ identityNumber });
  if (!student)
    return res.status(422).json({ message: "Identity number not found" });

  const auth = await authModel.findById({ _id: student.authId });
  if (auth)
    return res
      .status(422)
      .json({ message: "Account hash already registration" });

  try {
    res.status(200).json({ message: "Success", result: student });
  } catch (error) {
    console.log(error);
  }
};

const signUpStudent = async (req, res) => {
  const identityNumber = req.query.identityNumber;
  const password = req.body.password;
  const role = "Student";

  // email exist
  const student = await studentModel.findOne({
    identityNumber: identityNumber,
  });

  if (!student)
    return res
      .status(422)
      .json({ message: "No indentitas tidak dapat ditemukan" });

  // validation body
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(422).json({ validation: errors.array() });

  // password hash
  const passwordHash = await bcrypt.hash(password, 10);

  // callback
  try {
    const data = new authModel({
      identityNumber: student.identityNumber,
      password: passwordHash,
      role,
    });

    const saveData = await data.save();
    await studentModel.updateOne(
      { _id: student._id },
      { authId: data._id, accountConfirmation: false }
    );

    res.status(200).json({ message: "Success", result: saveData });
  } catch (error) {
    return res.status(500).json({ error: "Terjadi Kesalahan" });
  }
};

const verifyTeacher = async (req, res) => {
  const identityNumber = req.body.identityNumber;
  const teacher = await teacherModel.findOne({
    identityNumber: identityNumber,
  });
  if (!teacher)
    return res.status(404).json({ message: "Identity number not found" });
  try {
    res.status(200).json({ message: "Success", result: teacher });
  } catch (error) {
    console.log(error);
  }
};

const signUpTeacher = async (req, res) => {
  const identityNumber = req.query.identityNumber;
  const password = req.body.password;
  const role = "Teacher";

  const teacher = await teacherModel.findOne({ identityNumber });
  const auth = await authModel.findOne({ identityNumber: identityNumber });

  if (!teacher) {
    return res.status(422).json({ message: "Identity number Not found" });
  }

  if (auth) {
    return res
      .status(422)
      .json({ message: "Account has already registration" });
  }

  // validation form
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  // password hash
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const data = new authModel({
      identityNumber: teacher.identityNumber,
      password: passwordHash,
      role,
    });

    const saveData = await data.save();
    await teacherModel.updateOne(
      { _id: teacher._id },
      { authId: data._id, accountConfirmation: false }
    );
    res.status(200).json({ message: "Success", result: saveData });
  } catch (error) {
    console.log(error);
  }
};

const signIn = async (req, res) => {
  const identityNumber = req.body.identityNumber;
  const password = req.body.password;

  const auth = await authModel.findOne({ identityNumber });

  // e-mail not registered
  if (!auth) {
    return res.status(404).json({ message: "Identity mumber not registered" });
  }

  // validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.array() });
  }

  try {
    // password compare
    const passwordCompare = await bcrypt.compare(password, auth.password);
    // wrong password
    if (!passwordCompare)
      return res.status(422).json({ message: "Wrong Password" });

    const arr = [];
    switch (auth.role) {
      case "Staff": {
        const staff = await staffModel.findOne({ authId: auth._id });
        arr.push({
          fullName: staff.fullName,
        });
        break;
      }
      case "Teacher": {
        const teacher = await teacherModel.findOne({ authId: auth._id });
        arr.push({
          fullName: teacher.fullName,
        });
        break;
      }
      case "Student":
        {
          const student = await studentModel.findOne({ authId: auth._id });
          arr.push({
            fullName: student.fullName,
          });
        }
        break;
    }

    // jwt sign
    const token = jwt.sign({ id: auth._id }, process.env.TOKENSECRET);
    // send cookie to browser
    res.cookie("token", token);

    res.status(200).json({
      message: "Success",
      users: {
        fullName: arr[0].fullName,
        _id: auth._id,
        identityNumber: auth.identityNumber,
        role: auth.role,
      },
      accessToken: token,
    });
  } catch (error) {
    console.log(error);
  }
};

const loadStaff = async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  const auth = await authModel.findOne({ _id: id });
  const staff = await staffModel
    .findOne({ authId: auth._id })
    .populate("address");
  try {
    res.status(200).json({
      message: "Success",
      result: staff,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  signUpStaff,
  signUpTeacher,
  verifyStudent,
  signUpStudent,
  signIn,
  verifyTeacher,
  loadStaff,
};
