const teacherModel = require("../model/Teacher");
const studentModel = require("../model/student");
const authModel = require("../model/auth/auth");

const getStudent = async (req, res) => {
  const auth = await authModel.findById({ _id: req.user.id });

  const student = await studentModel
    .findOne({ authId: auth._id })
    .populate("task")
    .populate("address");
  const teacher = await teacherModel.find().populate("schedule");

  // get course
  try {
    const getCourseInTeacherData = (data, classRoom) => {
      //   data.map((items) => {
      //     items.schedule = items.schedule.filter((fill) =>
      //       classRoom.includes(fill.classRoom)
      //     );
      //     return itmes;
      //   });

      const arr = [];
      for (let i in data) {
        for (let b in data[i].schedule) {
          Object.values(data[i].schedule[b])?.filter((c) => {
            if (c.classRoom == classRoom) {
              arr.push({ teacherName: data[i].fullName, schedule: c });
            }
          });
        }
      }

      return arr;
    };
    const result = getCourseInTeacherData(teacher, student.classRoom);
    result == 0
      ? res.status(200).json("Course Not Found")
      : res.status(200).json({ message: "Succes", result: result });
  } catch (error) {
    console.log(error);
  }
};

const getScore = async (req, res) => {
  const student = await studentModel
    .findOne({ email: req.user.email })
    .populate("task");
  try {
    if (!student) return res.status(422).json({ message: "Task Not found" });
    res.status(200).json({ message: "Succes", result: student });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getStudent,
  getScore,
};
