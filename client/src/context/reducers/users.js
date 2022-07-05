import {
  FAILED_LOAD_DATA_USER,
  LOAD_USER_DATA,
  REMOVE_DATA_USER,
} from "../action/action-type";

const initialState = {
  users: [],
  error: "",
  isFetching: true,
};

const dataUsers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_DATA: {
      return {
        ...state,
        users: action.payload,
        isFetching: false,
      };
    }
    case FAILED_LOAD_DATA_USER: {
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    }
    case REMOVE_DATA_USER: {
      return {};
    }
    default:
      return state;
  }
};

export default dataUsers;
