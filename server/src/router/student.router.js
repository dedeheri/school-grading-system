const express = require("express");
const {
  getStudent,
  getScore,
  getUserStudent,
} = require("../controller/student.contoller");
const authorization = require("../middleware/auth");
const { authority } = require("../middleware/role");
const router = express.Router();

router.get("/student", authorization, authority("Student"), getStudent);
router.get(
  "/student/user",
  authorization,
  authority("Student"),
  getUserStudent
);
router.get("/student/score", authorization, authority("Student"), getScore);
module.exports = router;
