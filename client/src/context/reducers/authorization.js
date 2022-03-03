import {
  VERIFY_TEACHER,
  FAILED_VERIFY_TEACHER,
  VERIFY_TEACHER_NEXT_STEP,
  FAILED_VERIFY_TEACHER_NEXT_STEP,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
} from "../action/action-type";

const initialState = {
  users: [],
  error: "",
  validation: [],
  isFetching: true,
  loadingBar: 0,
  next: false,

  verifyUsers: {
    data: [],
    error: [],
    loadingBar: 0,
    next: false,
    isFetching: true,
    errorNextStep: [],
    errorAccountHashReady: [],
  },
};

const authorization = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_TEACHER: {
      return {
        ...state,
        verifyUsers: {
          isFetching: false,
          loadingBar: 100,
          data: action.payload,
          next: true,
        },
      };
    }
    case FAILED_VERIFY_TEACHER: {
      return {
        ...state,
        verifyUsers: {
          isFetching: false,
          loadingBar: 100,
          error: action.error,
        },
      };
    }
    case VERIFY_TEACHER_NEXT_STEP: {
      return {
        ...state,
        verifyUsers: {
          isFetching: false,
          loadingBar: 100,
          data: action.payload,
        },
      };
    }
    case FAILED_VERIFY_TEACHER_NEXT_STEP: {
      return {
        ...state,
        verifyUsers: {
          isFetching: false,
          loadingBar: 100,
          errorNextStep: action.error,
          errorAccountHashReady: action.errorAccountHashReady,
        },
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        loadingBar: 100,
        users: action.payload,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        isFetching: false,
        loadingBar: 100,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default authorization;
