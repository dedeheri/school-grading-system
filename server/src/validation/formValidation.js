const { check } = require("express-validator");

const validate = (props) => {
  switch (props) {
    case "ADD_SCHEDULE": {
      return [
        check("teacherName", "Teacher name can not be empty").notEmpty(),
        check("course", "Course can not be empty").notEmpty(),
        check("classRoom", "Class can not be empty").notEmpty(),
        check("day", "Day can not be empty").notEmpty(),
        check("time", "Time can not be empty").notEmpty(),
      ];
    }
    case "SIGNUP_STAFF": {
      return [
        check("fullName", "Nama Lengkap tidak boleh kosong").notEmpty(),
        check(
          "identityNumber",
          "Nomber Identitas tidak boleh kosong"
        ).notEmpty(),
        check("province", "Provinsi tidak boleh kosong").notEmpty(),
        check("city", "Kota tidak boleh kosong").notEmpty(),
        check("street", "Jalan tidak boleh kosong").notEmpty(),
        check("postelCode", "Kode pos tidak boleh kosong").notEmpty(),
        check("email", "Email tidak boleh kosong").notEmpty(),
        check(
          "password",
          "Kata sandi harus memiliki minimal 6 karakter "
        ).isLength({
          min: 6,
        }),
      ];
    }
    case "SIGNIN": {
      return [
        check("identityNumber", "Invalid Identity Number")
          .notEmpty()
          .isNumeric()
          .withMessage("Must be number"),
        check("password", "Password must be then 6 character ").isLength({
          min: 6,
        }),
      ];
    }
    case "UPDATE_TEACHER": {
      return [
        check("fullName", "Invalid Name").notEmpty(),
        check("status", "Status can not be empty").notEmpty(),
        check("province", "Province can not be empty").notEmpty(),
        check("city", "City can not be empty").notEmpty(),
        check("street", "Street can not be empty").notEmpty(),
        check("postelCode", "Postel Code can not be empty")
          .notEmpty()
          .isNumeric()
          .withMessage("Must be number"),
      ];
    }
    case "ADD_TEACHER": {
      return [
        check("fullName", "Invalid Name").notEmpty(),
        check("identityNumber", "Invalid NIP")
          .notEmpty()
          .isNumeric()
          .withMessage("Must be number"),
        check("status", "Status can not be empty").notEmpty(),
        check("province", "Province can not be empty").notEmpty(),
        check("city", "City can not be empty").notEmpty(),
        check("street", "Street can not be empty").notEmpty(),
        check("postelCode", "Postel Code can not be empty")
          .notEmpty()
          .isNumeric()
          .withMessage("Must be number"),
      ];
    }
    case "ADD_STUDENT": {
      return [
        check("fullName", "Invalid Name").notEmpty(),
        check("identityNumber", "Invalid NIS")
          .notEmpty()
          .isNumeric()
          .withMessage("Identity Number Must be number"),
        check("classRoom", "classRoom can not be empty").notEmpty(),
        check("province", "Province can not be empty").notEmpty(),
        check("city", "City can not be empty").notEmpty(),
        check("street", "Street can not be empty").notEmpty(),
        check("postelCode", "Postel Code can not be empty").notEmpty(),
      ];
    }
    case "PASSWORD": {
      return [
        check("password", "Kata sandi Harus memiliki 6 karakter atau lebih")
          .isString()
          .isLength({
            min: 6,
          }),
        check(
          "repeatPassword",
          "Ulangi Kata sandi Harus memiliki 6 karakter atau lebih"
        )
          .notEmpty()
          .custom((value, { req }) => {
            if (value !== req.body.password) {
              throw new Error("Password not match");
            }
            return true;
          }),
      ];
    }
    case "UPDATE_SCHEDULE": {
      return [
        check("course", "Course can not be empty").notEmpty(),
        check("classRoom", "Class room can not be empty").notEmpty(),
        check("day", "Day can not be empty").notEmpty(),
        check("time", "time can not be empty").notEmpty(),
      ];
    }
    case "ADD_CLASS": {
      return [
        check("homeRoomTeacher", "Teacher can not be empty").notEmpty(),
        check("classRoom", "Class room can not be empty").notEmpty(),
      ];
    }
    case "ADD_TASK": {
      return [
        check("course", "Course can not be empty").notEmpty(),
        check("attendance")
          .notEmpty()
          .withMessage("Attendance can not be empty")
          .isNumeric()
          .withMessage("Attendance must be number"),
        check("bcOne")
          .notEmpty()
          .withMessage("Basic competence One can not be empty")
          .isNumeric()
          .withMessage("Basic competence One must be number"),
        check("bcTwo")
          .notEmpty()
          .withMessage("Basic competence Two can not be empty")
          .isNumeric()
          .withMessage("Basic competence Two must be number"),
        check("bcThree")
          .notEmpty()
          .withMessage("Basic competence Three can not be empty")
          .isNumeric()
          .withMessage("Basic competence Three must be number"),
        check("bcFour")
          .notEmpty()
          .withMessage("Basic competence Three can not be empty")
          .isNumeric()
          .withMessage("Basic competence Three must be number"),
        check("midtermExam")
          .notEmpty()
          .withMessage("Midterm Exam can not be empty")
          .isNumeric()
          .withMessage("Midterm Exam must be number"),
        check("finalExams")
          .notEmpty()
          .withMessage("Final Exams Exam can not be empty")
          .isNumeric()
          .withMessage("Finax Exams Exam must be number"),
      ];
    }
  }
};

module.exports = validate;
