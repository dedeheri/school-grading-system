import Cookies from "js-cookie";
import apis from "../../api/apis";
import { toast } from "react-toastify";

// headers
import { config } from "../../config/headers";

// action type
import * as actionType from "../actionType/actionTypeStudent";

export const verifyNoIndentityStudent = (identityNumber) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionType.START_VALIDASI_NO_IDENTITY });

      const { data } = await apis.post(
        "/signup/student",
        { identityNumber },
        config
      );
      dispatch({
        type: actionType.SUCCESS_VALIDASI_NO_IDENTITY,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_VALIDASI_NO_IDENTITY,
        payload: error.response.data,
      });
    }
  };
};

export const verifyAddPasswordStudent = (
  query,
  password,
  repeatPassword,
  router
) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionType.START_PASSWORD_VALIDASI });
      const { data } = await apis.post(
        `/signup/student/next${query}`,
        {
          password,
          repeatPassword,
        },
        config
      );

      dispatch({ type: actionType.SUCCESS_PASSWORD_VALIDASI, payload: data });
      toast.success(data?.message);
      router("/");
    } catch (error) {
      if (error.response.data.validation) {
        dispatch({
          type: actionType.FAILED_PASSWORD_VALIDASI,
          validation: error.response.data,
        });
      } else {
        dispatch({
          type: actionType.FAILED_PASSWORD_VALIDASI,
          payload: error.response.data,
        });
      }
    }
  };
};

export const getScoreStudent = () => {
  return async (dispatch) => {
    try {
      const { data } = await apis.get("/student/score", config);
      dispatch({ type: actionType.GET_SCORE, payload: data });

      console.log(data);
    } catch (error) {
      dispatch({
        type: actionType.FAILED_GET_SCORE,
        payload: error.response.data,
      });
    }
  };
};
