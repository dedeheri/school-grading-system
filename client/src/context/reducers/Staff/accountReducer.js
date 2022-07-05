import {
  CONFIRMASTION_ACCOUNT,
  FAILED_CONFIRMASTION_ACCOUNT,
  FAILED_GET_DATA_ACCOUNT,
  GET_DATA_ACCOUNT,
} from "../../action/action-type";

const initialState = {
  data: [],
  isFetching: true,
  loadingBar: 0,
  error: [],
  success: "",
};

const account = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_ACCOUNT:
      return {
        ...state,
        data: action.payload,
        loadingBar: 100,
        isFetching: false,
      };
    case FAILED_GET_DATA_ACCOUNT: {
      return {
        ...state,
        error: action.error,
        loadingBar: 100,
        isFetching: false,
      };
    }
    case CONFIRMASTION_ACCOUNT: {
      return {
        ...state,
        success: action.payload,
        loadingBar: 100,
        isFetching: false,
      };
    }
    case FAILED_CONFIRMASTION_ACCOUNT: {
      return {
        ...state,
        error: action.error,
        loadingBar: 100,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};

export default account;
