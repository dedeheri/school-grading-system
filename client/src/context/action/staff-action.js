import Cookies from "js-cookie";
import apis from "../../api/apis";
import { toast } from "react-toastify";
import {
  GET_DATA_STUDENT,
  FAILED_GET_DATA_STUDENT,
  GET_DATA_ACTIVITY,
  FAILED_GET_DATA_ACTIVITY,
  GET_DATA_SCHEDULE,
  FAILED_GET_DATA_SCHEDULE,
  ADD_SCHEDULE,
  FAILED_ADD_SCHEDULE,
  DELETE_SCHEDULE,
  FAILED_DELETE_SCHEDULE,
  GET_DATA_TEACHER,
  FAILED_GET_DATA_TEACHER,
  GET_DETAIL_TEACHER,
  ADD_DATA_TEACHER,
  FAILED_ADD_DATA_TEACHER_VALIDATION,
  FAILED_ADD_DATA_TEACHER_MESSAGE,
  FAILED_DELETE_DATA_TEACHER,
  DELETE_DATA_TEACHER,
  GET_DATA_CLASSROOM,
  FAILED_GET_DATA_CLASSROM,
  FAILED_ADD_DATA_CLASSROOM,
  ADD_DATA_CLASSROOM,
  DELETE_DATA_CLASSROM,
  FAILED_DELETE_DATA_CLASSROM,
  GET_DETAILS_SCHEDULE,
  FAILED_UPDATE_DETAILS_SCHEDULE,
  REQUEST_DETAIL_SCHEDULE,
  REQUEST_DETAIL_CLASSROOM,
  GET_DETAIL_CLASSROOM,
  FAILED_GET_DETAIL_CLASSROOM,
  SUCCESS_UPDATE_CLASSROOM,
  FAILED_UPDATE_CLASSROOM,
  SUCCESS_UPDATE_TEACHER,
  FAILED_UPDATE_TEACHER_VALIDATION,
  FAILED_UPDATE_TEACHER_MESSAGE,
  GET_DETAIL_STUDENT,
  FAILED_GET_DETAIL_STUDENT,
  DELETE_DATA_STUDENT,
  FAILED_DELETE_DATA_STUDENT,
  ADD_DATA_STUDENT,
  FAILED_ADD_DATA_STUDENT_VALIDATION,
  FAILED_ADD_DATA_STUDENT_MESSAGE_ERROR,
  FAILED_UPDATE_STUDENT_VALIDATION,
  FAILED_UPDATE_STUDENT_MESSAGE_ERROR,
  SUCCESS_UPDATE_STUDENT,
  GET_DATA_ACCOUNT,
  FAILED_GET_DATA_ACCOUNT,
  FAILED_CONFIRMASTION_ACCOUNT,
  CONFIRMASTION_ACCOUNT,
} from "./action-type";

const config = {
  headers: {
    "Content-type": "Application/json",
    authorization: `Bearer ${Cookies.get("secure-To")}`,
  },
};

export const setHome = () => async (dispatch) => {
  try {
    const { data } = await apis.get(`/staff`, config);
    dispatch({ type: GET_DATA_ACTIVITY, payload: data });
  } catch (error) {
    dispatch({
      type: FAILED_GET_DATA_ACTIVITY,
      error: error.response.data.massage,
    });
  }
};

export const setSchedule = (search) => async (dispatch) => {
  try {
    const { data } = await apis.get(`/staff/schedule${search}`, config);
    dispatch({
      type: GET_DATA_SCHEDULE,
      page: { page: data.page },
      payload: { data: data.result },
    });
  } catch (error) {
    dispatch({
      type: FAILED_GET_DATA_SCHEDULE,
      error: error.response.data.error,
    });
  }
};

export const addSchedule =
  (teacherName, course, classRoom, day, time) => async (dispatch) => {
    try {
      const { data } = await apis.post(
        "/staff/schedule/add-schedule",
        {
          teacherName,
          course,
          classRoom,
          day,
          time,
        },
        config
      );
      dispatch({ type: ADD_SCHEDULE, payload: data.message });
      toast.success("Berhasil Tambah Data");
    } catch (error) {
      dispatch({
        type: FAILED_ADD_SCHEDULE,
        payload: error.response.data.errors,
      });
    }
  };

export const setTeacher = (query) => async (dispatch) => {
  try {
    const { data } = await apis.get(`/staff/teacher${query}`, config);
    dispatch({
      type: GET_DATA_TEACHER,
      payload: data.result,
      page: data.page,
    });
  } catch (error) {
    dispatch({
      type: FAILED_GET_DATA_TEACHER,
      error: error.response.data.error,
    });
  }
};

export const setDetailTeacher = (search) => async (dispatch) => {
  try {
    const { data } = await apis.get(`staff/teacher/detail${search}`, {
      headers: {
        "Content-type": "Application/json",
        authorization: `Bearer ${Cookies.get("secure-To")}`,
      },
    });
    dispatch({ type: GET_DETAIL_TEACHER, payload: data });
  } catch (error) {
    dispatch({
      type: FAILED_GET_DATA_TEACHER,
      error: error.response.data,
    });
  }
};

export const addTeacher =
  (fullName, identityNumber, status, street, city, province, postelCode) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${Cookies.get("secure-To")}`,
      },
    };
    try {
      await apis.post(
        "/staff/teacher/add-teacher",
        {
          fullName,
          identityNumber,
          status,
          street,
          status,
          city,
          province,
          postelCode,
        },
        config
      );

      dispatch({ type: ADD_DATA_TEACHER });
    } catch (error) {
      if (error.response.data.errors) {
        dispatch({
          type: FAILED_ADD_DATA_TEACHER_VALIDATION,
          error: error.response.data.errors,
        });
      } else {
        dispatch({
          type: FAILED_ADD_DATA_TEACHER_MESSAGE,
          error: error.response.data.message,
        });
      }
    }
  };

export const setDelateSchedule = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await apis.delete(`staff/schedule/${id}`, {
        headers: {
          "Content-type": "Application/json",
          authorization: `Bearer ${Cookies.get("secure-To")}`,
        },
      });
      dispatch({ type: DELETE_SCHEDULE, payload: data.message });
      toast.success("Berhasil Hapus Data");
    } catch (error) {
      dispatch({
        type: FAILED_DELETE_SCHEDULE,
        error: error.response.data.error,
      });
    }
  };
};

export const setDetailOneSchedule = (query) => async (dispatch) => {
  dispatch({ type: REQUEST_DETAIL_SCHEDULE });
  try {
    const { data } = await apis.get(`staff/schedule/detail${query}`, {
      headers: {
        "Content-type": "Application/json",
        authorization: `Bearer ${Cookies.get("secure-To")}`,
      },
    });
    dispatch({ type: GET_DETAILS_SCHEDULE, payload: data });
  } catch (error) {
    dispatch({
      type: FAILED_UPDATE_DETAILS_SCHEDULE,
      error: error.response.data.message,
    });
  }
};

export const setUpdateSchedule = (search, course, classRoom, day, time) => {
  return async (dispatch) => {
    try {
      const { data } = await apis.put(
        `staff/schedule/update${search}`,
        {
          course,
          classRoom,
          day,
          time,
        },
        {
          headers: {
            "Content-type": "Application/json",
            authorization: `Bearer ${Cookies.get("secure-To")}`,
          },
        }
      );
      toast.success("Berhasil Update Data");
    } catch (error) {
      dispatch({
        type: FAILED_UPDATE_DETAILS_SCHEDULE,
        error: error.response.data.message,
      });
    }
  };
};

export const setStudent = (search) => async (dispatch) => {
  try {
    const { data } = await apis.get(`/staff/student${search}`, {
      headers: {
        "Content-type": "Application/json",
        authorization: `Bearer ${Cookies.get("secure-To")}`,
      },
    });

    dispatch({ type: GET_DATA_STUDENT, payload: data, page: data.page });
  } catch (error) {
    dispatch({ type: FAILED_GET_DATA_STUDENT, error: error.response });
  }
};

export const setDeleteTeacher = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await apis.delete(`staff/teacher/${id}`, {
        headers: {
          "Content-type": "Application/json",
          authorization: `Bearer ${Cookies.get("secure-To")}`,
        },
      });
      dispatch({ type: DELETE_DATA_TEACHER, message: data.message });
      toast.success("Berhasil Hapus Data");
    } catch (error) {
      dispatch({
        type: FAILED_DELETE_DATA_TEACHER,
        error: error.response.data.error,
      });
    }
  };
};

export const setClassRoomList = (query) => async (dispatch) => {
  try {
    const { data } = await apis.get(`staff/class${query}`, {
      headers: {
        "Content-type": "Application/json",
        authorization: `Bearer ${Cookies.get("secure-To")}`,
      },
    });
    dispatch({ type: GET_DATA_CLASSROOM, payload: data });
  } catch (error) {
    dispatch({ type: FAILED_GET_DATA_CLASSROM, error: error.response });
  }
};

export const addClassRoom = (homeRoomTeacher, classRoom) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "Application/json",
        authorization: `Bearer ${Cookies.get("secure-To")}`,
      },
    };

    try {
      const { data } = await apis.post(
        "staff/class/add-class",
        { homeRoomTeacher, classRoom },
        config
      );
      dispatch({ type: ADD_DATA_CLASSROOM, payload: data });
      toast.success("Berhasil Tambah Data");
    } catch (error) {
      dispatch({
        type: FAILED_ADD_DATA_CLASSROOM,
        error: { error: error.response.data.errors },
      });
    }
  };
};

export const setDeleteClassRoom = (id) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "Application/json",
        authorization: `Bearer ${Cookies.get("secure-To")}`,
      },
    };
    try {
      const { data } = await apis.delete(`staff/class/${id}`, config);
      dispatch({ type: DELETE_DATA_CLASSROM });
      toast.success(data?.message);
    } catch (error) {
      dispatch({
        type: FAILED_DELETE_DATA_CLASSROM,
        error: error.response.data.message,
      });
    }
  };
};

export const setUpdateClass = (id, homeRoomTeacher, classRoom) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "Application/json",
        authorization: `Bearer ${Cookies.get("secure-To")}`,
      },
    };
    try {
      const { data } = await apis.put(
        `staff/class${id}`,
        { homeRoomTeacher, classRoom },
        config
      );
      dispatch({ type: SUCCESS_UPDATE_CLASSROOM, payload: data });
      toast.success("Berhasil Update Data");
    } catch (error) {
      dispatch({
        type: FAILED_UPDATE_CLASSROOM,
        error: error.response.data.errors,
      });
    }
  };
};

export const setDetailClass = (id) => {
  return async (dispatch) => {
    dispatch({ type: REQUEST_DETAIL_CLASSROOM });
    const config = {
      headers: {
        "Content-type": "Application/json",
        authorization: `Bearer ${Cookies.get("secure-To")}`,
      },
    };
    try {
      const { data } = await apis.get(`staff/class/detail${id}`, config);
      dispatch({ type: GET_DETAIL_CLASSROOM, payload: data });
    } catch (error) {
      dispatch({ type: FAILED_GET_DETAIL_CLASSROOM, error: error });
    }
  };
};

export const setUpdateTeacher = (
  search,
  fullName,
  status,
  province,
  city,
  street,
  postelCode
) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-type": "Application/json",
          authorization: `Bearer ${Cookies.get("secure-To")}`,
        },
      };
      const { data } = await apis.put(
        `/staff/teacher${search}`,
        {
          fullName,
          status,
          province,
          city,
          street,
          postelCode,
        },
        config
      );

      dispatch({ type: SUCCESS_UPDATE_TEACHER, data: data });
      toast.success("Berhasil Update Data");
    } catch (error) {
      if (error.response.data.errors) {
        dispatch({
          type: FAILED_UPDATE_TEACHER_VALIDATION,
          error: error.response.data.errors,
        });
      } else {
        dispatch({
          type: FAILED_UPDATE_TEACHER_MESSAGE,
          error: error.response.data.message,
        });
      }
    }
  };
};

export const setDetailStudent = (search) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "Application/json",
        authorization: `Bearer ${Cookies.get("secure-To")}`,
      },
    };

    try {
      const { data } = await apis.get(`staff/student/detail${search}`, config);
      dispatch({ type: GET_DETAIL_STUDENT, data: data });
    } catch (error) {
      dispatch({
        type: FAILED_GET_DETAIL_STUDENT,
        error: error.response.data.message,
      });
    }
  };
};

export const setDeleteStudent = (id) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "Application/json",
        authorization: `Bearer ${Cookies.get("secure-To")}`,
      },
    };

    try {
      const { data } = await apis.delete(`/staff/student/${id}`, config);
      dispatch({ type: DELETE_DATA_STUDENT, data: data });
      toast.success("Berhasil Hapus Data");
    } catch (error) {
      dispatch({
        type: FAILED_DELETE_DATA_STUDENT,
        error: error.response.data.message,
      });
    }
  };
};

export const setAddStudent = (
  fullName,
  classRoom,
  identityNumber,
  street,
  city,
  province,
  postelCode
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
        "/staff/student/add-student",
        {
          fullName,
          classRoom,
          identityNumber,
          street,
          city,
          province,
          postelCode,
        },
        config
      );

      dispatch({ type: ADD_DATA_STUDENT, payload: data });
    } catch (error) {
      const er = error.response.data.errors;
      if (er) {
        dispatch({ type: FAILED_ADD_DATA_STUDENT_VALIDATION, error: er });
      } else {
        dispatch({
          type: FAILED_ADD_DATA_STUDENT_MESSAGE_ERROR,
          error: error.response.data.message,
        });
      }
    }
  };
};

export const setUpdateStudent = (
  search,
  fullName,
  identityNumber,
  classRoom,
  province,
  city,
  street,
  postelCode
) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "Application/json",
        authorization: `Bearer ${Cookies.get("secure-To")}`,
      },
    };

    try {
      const { data } = await apis.put(
        `/staff/student/${search}`,
        {
          fullName,
          identityNumber,
          classRoom,
          province,
          city,
          street,
          postelCode,
        },
        config
      );
      dispatch({ type: SUCCESS_UPDATE_STUDENT, data: data });
      toast.success("Berhasil Update Data");
    } catch (error) {
      const err = error.response.data.errors;
      if (err) {
        dispatch({ type: FAILED_UPDATE_STUDENT_VALIDATION, error: err });
      } else {
        dispatch({
          type: FAILED_UPDATE_STUDENT_MESSAGE_ERROR,
          error: error.response.data.message,
        });
      }
    }
  };
};

export const setAccount = (sort) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "Application/json",
        authorization: `Bearer ${Cookies.get("secure-To")}`,
      },
    };
    try {
      const { data } = await apis.get(`/staff/account${sort}`, config);
      dispatch({ type: GET_DATA_ACCOUNT, payload: data });
    } catch (error) {
      dispatch({
        type: FAILED_GET_DATA_ACCOUNT,
        error: error.response.data,
      });
    }
  };
};

export const setConfirmationAccount = (id) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "Application/json",
        authorization: `Bearer ${Cookies.get("secure-To")}`,
      },
    };

    try {
      const { data } = await apis.put(
        `/staff/confrim/${id}`,
        {
          confirmation: true,
        },
        config
      );
      dispatch({ type: CONFIRMASTION_ACCOUNT, payload: data.message });
      toast.success("Berhasil Konfirmasi Akun");
    } catch (error) {
      dispatch({
        type: FAILED_CONFIRMASTION_ACCOUNT,
        error: error.response.data.message,
      });
    }
  };
};
