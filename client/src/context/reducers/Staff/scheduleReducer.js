import {
  ADD_SCHEDULE,
  DELETE_SCHEDULE,
  FAILED_ADD_SCHEDULE,
  FAILED_DELETE_SCHEDULE,
  FAILED_GET_DATA_SCHEDULE,
  FAILED_UPDATE_DETAILS_SCHEDULE,
  GET_DATA_SCHEDULE,
  GET_DETAILS_SCHEDULE,
  REMOVE_ADD_SCHEDULE,
  REMOVE_UPDATE_DETAILS_SCHEDULE,
  REQUEST_DETAIL_SCHEDULE,
} from "../../action/action-type";

const initialState = {
  getData: {
    data: {},
    error: [],
    page: {},
  },

  postData: {
    message: [],
    error: "",
    slide: true,
  },

  data: [],
  error: [],
  loadingBar: 0,
  isFetching: true,
  refreshPage: null,
  dataUpdate: [],
};

const schedule = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SCHEDULE: {
      return {
        ...state,
        loadingBar: 100,
        isFetching: false,
        getData: {
          ...state,
          data: action.payload,
          page: action.page,
        },
      };
    }
    case FAILED_GET_DATA_SCHEDULE: {
      return {
        ...state,
        isFetching: false,
        loadingBar: 100,
        getData: {
          ...state,
          error: action.error,
        },
      };
    }
    case ADD_SCHEDULE: {
      return {
        ...state,
        postData: {
          message: action.payload,
          slide: false,
        },
        isFetching: false,
        loadingBar: 100,
        refreshPage: true,
      };
    }
    case REMOVE_ADD_SCHEDULE: {
      return {
        ...state,
        postData: {},
      };
    }
    case FAILED_ADD_SCHEDULE: {
      return {
        ...state,
        isFetching: false,
        loadingBar: 100,
        postData: {
          error: action.payload,
          slide: true,
        },
      };
    }
    case DELETE_SCHEDULE: {
      return {
        ...state,
        isFetching: false,
        loadingBar: 100,
        data: action.payload,
      };
    }
    case FAILED_DELETE_SCHEDULE: {
      return {
        ...state,
        loadingBar: 100,
        isFetching: false,
        error: action.error,
      };
    }
    case REQUEST_DETAIL_SCHEDULE: {
      return {
        ...state,
        loadingBar: 100,
        isFetching: true,
      };
    }
    case GET_DETAILS_SCHEDULE: {
      return {
        ...state,
        loadingBar: 100,
        isFetching: false,
        dataUpdate: action.payload,
      };
    }
    case FAILED_UPDATE_DETAILS_SCHEDULE: {
      return {
        ...state,
        loadingBar: 100,
        isFetching: false,
        error: action.error,
      };
    }
    case REMOVE_UPDATE_DETAILS_SCHEDULE: {
      return {
        ...state,
        loadingBar: 100,
        isFetching: false,
        dataUpdate: {},
      };
    }
    default:
      return state;
  }
};

export default schedule;
