const {
  GET_INFORMATION_STUDENT,
  FAILED_GET_INFORMATION_STUDENT,
} = require("../../action/action-type");

const initialState = {
  data: {},
  error: "",
  isFetching: true,
};

const informationStudent = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFORMATION_STUDENT: {
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    }
    case FAILED_GET_INFORMATION_STUDENT: {
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    }

    default:
      return state;
  }
};

export default informationStudent;
