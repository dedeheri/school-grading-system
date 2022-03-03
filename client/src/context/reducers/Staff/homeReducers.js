import {
  GET_DATA_ACTIVITY,
  FAILED_GET_DATA_ACTIVITY,
} from "../../action/action-type";

const initialState = {
  data: [],
  error: "",
  loadingBar: 0,
  loading: true,
  isFetching: true,
};

const activity = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_ACTIVITY: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        loadingBar: 100,
        isFetching: false,
      };
    }
    case FAILED_GET_DATA_ACTIVITY: {
      return {
        ...state,
        error: action.error,
        loading: false,
        loadingBar: 100,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};

export default activity;
