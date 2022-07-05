const express = require("express");
const {
  getAllData,
  confirmAccount,
  addSchedule,
  viewSchedule,
  editSchedule,
  deleteSchedule,
  viewTeacher,
  detailTeacher,
  viewStudent,
  detailStudent,
  addTeacher,
  addStudent,
  detailSchedule,
  deleteTeacher,
  addClass,
  deleteClass,
  viewClass,
  editClass,
  detailClass,
  editTeacher,
  deleteStudent,
  editStudent,
  viewAccount,
} = require("../controller/staff.contoller");
const authorization = require("../middleware/auth");
const { authority } = require("../middleware/role");
const validate = require("../validation/formValidation");
const router = express.Router();

router.get("/staff", authorization, authority("Staff"), getAllData);
router.put(
  "/staff/confrim/:id",
  authorization,
  authority("Staff"),
  confirmAccount
);
router.post(
  "/staff/schedule/add-schedule",
  authorization,
  authority("Staff"),
  validate("ADD_SCHEDULE"),
  addSchedule
);
router.get("/staff/schedule", authorization, authority("Staff"), viewSchedule);
router.put(
  "/staff/schedule/update",
  authorization,
  authority("Staff"),
  validate("UPDATE_SCHEDULE"),
  editSchedule
);
router.get(
  "/staff/schedule/detail",
  authorization,
  authority("Staff"),
  detailSchedule
);
router.delete(
  "/staff/schedule/:id",
  authorization,
  authority("Staff"),
  deleteSchedule
);
router.get("/staff/teacher", authorization, authority("Staff"), viewTeacher);
router.get(
  "/staff/teacher/detail",
  authorization,
  authority("Staff"),
  detailTeacher
);
router.delete(
  "/staff/teacher/:id",
  authorization,
  authority("Staff"),
  deleteTeacher
);

router.get("/staff/student", authorization, authority("Staff"), viewStudent);
router.get(
  "/staff/student/detail",
  authorization,
  authority("Staff"),
  detailStudent
);
router.delete(
  "/staff/student/:id",
  authorization,
  authority("Staff"),
  deleteStudent
);
router.post(
  "/staff/teacher/add-teacher",
  authorization,
  authority("Staff"),
  validate("ADD_TEACHER"),
  addTeacher
);
router.put(
  "/staff/teacher",
  authorization,
  authority("Staff"),
  validate("UPDATE_TEACHER"),
  editTeacher
);
router.post(
  "/staff/student/add-student",
  authorization,
  authority("Staff"),
  validate("ADD_STUDENT"),
  addStudent
);

router.put(
  "/staff/student/",
  authorization,
  authority("Staff"),
  validate("ADD_STUDENT"),
  editStudent
);
router.post(
  "/staff/class/add-class",
  authorization,
  authority("Staff"),
  validate("ADD_CLASS"),
  addClass
);
router.get("/staff/class", authorization, authority("Staff"), viewClass);
router.delete(
  "/staff/class/:id",
  authorization,
  authority("Staff"),
  deleteClass
);

router.get(
  "/staff/class/detail",
  authorization,
  authority("Staff"),
  detailClass
);
router.put(
  "/staff/class/",
  authorization,
  authority("Staff"),
  validate("ADD_CLASS"),
  editClass
);

router.get("/staff/account", authorization, authority("Staff"), viewAccount);
module.exports = router;
