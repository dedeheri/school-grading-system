import Cookies from "js-cookie";
import apis from "../../api/apis";
import { toast } from "react-toastify";

import {
  ADD_DATA_SCORE,
  FAILED_ADD_DATA_SCORE,
  FAILED_GET_DATA_SCORE,
  FAILED_GET_INFORMATION_STUDENT,
  GET_DATA_SCORE,
  GET_INFORMATION_STUDENT,
} from "./action-type";

export const getScore = (search) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "Application/json",
        authorization: `Bearer ${Cookies.get("secure-To")}`,
      },
    };

    try {
      const { data } = await apis.get(`/teacher/score${search}`, config);
      dispatch({ type: GET_DATA_SCORE, payload: data });
    } catch (error) {
      dispatch({ type: FAILED_GET_DATA_SCORE, payload: error });
    }
  };
};

export const postScore = (
  studentName,
  attendance,
  taskOne,
  taskTwo,
  taskThree,
  midtermExam,
  finalExams,
  course
) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "Application/json",
        authorization: `Bearer ${Cookies.get("secure-To")}`,
      },
    };

    try {
      const { data } = await apis.post(
        `/teacher/score/add-score`,
        {
          studentName,
          attendance,
          taskOne,
          taskTwo,
          taskThree,
          midtermExam,
          finalExams,
          course,
        },
        config
      );

      dispatch({ type: ADD_DATA_SCORE, payload: data });
      toast.success("Berhasil Hapus Data");
    } catch (error) {
      dispatch({
        type: FAILED_ADD_DATA_SCORE,
        payload: error.response.data.errors,
      });
    }
  };
};

export const getInformationStudent = () => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "Application/json",
        authorization: `Bearer ${Cookies.get("secure-To")}`,
      },
    };

    try {
      const { data } = await apis.get("/teacher/informationstudent", config);
      dispatch({ type: GET_INFORMATION_STUDENT, payload: data });
    } catch (error) {
      dispatch({ type: FAILED_GET_INFORMATION_STUDENT, payload: error });
    }
  };
};
