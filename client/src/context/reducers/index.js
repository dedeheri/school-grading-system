import { combineReducers } from "redux";
import authorization from "./authorization";
import users from "./users";
import student from "./Staff/student";
import activity from "./Staff/homeReducers";
import schedule from "./Staff/scheduleReducer";
import teacher from "./Staff/teacherReducers";
import classRoomList from "./Staff/classReducers";
import account from "./Staff/accountReducer";

import score from "./Teacher/score";
import informationStudent from "./Teacher/informationStudent";

import scoreStudent from "./Student/score";

const combine = combineReducers({
  users,
  account,
  authorization,
  student,
  activity,
  schedule,
  teacher,
  classRoomList,
  score,
  informationStudent,
  scoreStudent,
});

export default combine;
