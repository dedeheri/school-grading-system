import Cookies from "js-cookie";
import objectHash from "object-hash";
import {
  FAILED_VERIFY_TEACHER,
  FAILED_VERIFY_TEACHER_NEXT_STEP,
  LOGIN_FAILED,
  VERIFY_TEACHER,
  VERIFY_TEACHER_NEXT_STEP,
  LOGIN_SUCCESS,
  LOGIN_START,
} from "./action-type";
import apis from "../../api/apis";

export const verifyTeacherSignIn = (identityNumber) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const { data } = await apis.post(
        `/signup/teacher`,
        {
          identityNumber,
        },
        config
      );
      dispatch({ type: VERIFY_TEACHER, payload: data });
    } catch (error) {
      dispatch({
        type: FAILED_VERIFY_TEACHER,
        error: error.response.data,
      });
    }
  };
};

export const setLogin = (identityNumber, password, navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_START });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await apis.post(
        "/signin",
        {
          identityNumber,
          password,
        },
        config
      );
      Cookies.set("secure-To", data.accessToken);
      Cookies.set("secure-2nd", objectHash(data.users.role));
      Cookies.set("uid", data.users._id);
      dispatch({ type: LOGIN_SUCCESS, payload: data });

      if (data.users.role === "Staff") {
        navigate("/staff");
      }

      if (data.users.role === "Teacher") {
        navigate("/teacher");
      }

      if (data.users.role === "Student") {
        navigate("/student");
      }
    } catch (error) {
      dispatch({
        type: LOGIN_FAILED,
        payload: error.response.data,
      });
    }
  };
};

export const setVerifyNextStep = (search, password, router) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const { data } = await apis.post(
        `/signup/teacher/next${search}`,
        {
          password,
        },
        config
      );

      if (data.message === "Success") {
        router("/");
      }
      dispatch({ type: VERIFY_TEACHER_NEXT_STEP, payload: data });
    } catch (error) {
      const er = error.response.data.errors;

      if (er) {
        dispatch({
          type: FAILED_VERIFY_TEACHER_NEXT_STEP,
          error: er,
        });
      } else {
        dispatch({
          type: FAILED_VERIFY_TEACHER_NEXT_STEP,
          errorAccountHashReady: error.response.data.message,
        });
      }
    }
  };
};
