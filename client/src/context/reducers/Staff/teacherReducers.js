import {
  ADD_DATA_TEACHER,
  DELETE_DATA_TEACHER,
  FAILED_ADD_DATA_TEACHER,
  FAILED_ADD_DATA_TEACHER_MESSAGE,
  FAILED_ADD_DATA_TEACHER_VALIDATION,
  FAILED_DELETE_DATA_TEACHER,
  FAILED_GET_DATA_TEACHER,
  FAILED_UPDATE_TEACHER,
  FAILED_UPDATE_TEACHER_MESSAGE,
  FAILED_UPDATE_TEACHER_VALIDATION,
  GET_DATA_TEACHER,
  GET_DETAIL_TEACHER,
  REMOVE_GET_DETAIL_TEACHER,
  REQUEST_DATA_SINGLE_TEACHER,
  SUCCESS_UPDATE_TEACHER,
} from "../../action/action-type";

const initialState = {
  data: [],
  loadingBar: 0,
  error: [],
  detail: [],
  isFetching: true,
  refreshPage: null,
  errorValidation: [],
  errorValidationUpdate: [],
  errorMessageUpdate: "",
  errorMessage: "",
  dataUpdate: [],
  isFetchingTwo: true,
  isFetchingUpdate: true,

  // get all data
  getData: {
    data: [],
    error: [],
    isFetching: true,
    page: [],
  },
};
const teacher = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_TEACHER: {
      return {
        ...state,
        getData: {
          ...state.getData,
          data: action.payload,
          page: action.page,
          isFetching: false,
        },
        loadingBar: 100,
      };
    }
    case FAILED_GET_DATA_TEACHER: {
      return {
        ...state,
        loadingBar: 100,
        getData: {
          ...state.getData,
          error: action.error,
          isFetching: false,
        },
      };
    }
    case GET_DETAIL_TEACHER: {
      return {
        ...state,
        isFetchingTwo: false,
        isFetchingUpdate: false,
        loadingBar: 100,
        detail: action.payload,
      };
    }
    case REMOVE_GET_DETAIL_TEACHER: {
      return {
        ...state,
        isFetchingTwo: {},

        loadingBar: 100,
        detail: {},

        getData: {
          ...state.getData,
          isFetching: true,
        },
      };
    }
    case ADD_DATA_TEACHER: {
      return {
        ...state,
        isFetching: false,
        loadingBar: 100,
        refreshPage: true,
      };
    }
    case FAILED_ADD_DATA_TEACHER_VALIDATION: {
      return {
        ...state,
        isFetching: false,
        loadingBar: 100,
        errorValidation: action.error,
      };
    }
    case FAILED_ADD_DATA_TEACHER_MESSAGE: {
      return {
        ...state,
        isFetching: false,
        loadingBar: 100,
        errorMessage: action.error,
      };
    }
    case DELETE_DATA_TEACHER: {
      return {
        ...state,
        isFetching: false,
        loadingBar: 100,
        data: action.message,
      };
    }
    case FAILED_DELETE_DATA_TEACHER: {
      return {
        ...state,
        isFetching: false,
        loadingBar: 100,
        error: action.error,
      };
    }
    case REQUEST_DATA_SINGLE_TEACHER: {
      return {
        ...state,
        isFetchingUpdate: false,
        loadingBar: 100,
      };
    }
    case SUCCESS_UPDATE_TEACHER: {
      return {
        ...state,
        isFetchingUpdate: false,
        loadingBar: 100,
        dataUpdate: action.data,
      };
    }
    case FAILED_UPDATE_TEACHER_VALIDATION: {
      return {
        ...state,
        isFetchingUpdate: false,
        loadingBar: 100,
        errorValidationUpdate: action.error,
      };
    }
    case FAILED_UPDATE_TEACHER_MESSAGE: {
      return {
        ...state,
        isFetchingUpdate: false,
        loadingBar: 100,
        errorMessageUpdate: action.error,
      };
    }
    default:
      return state;
  }
};

export default teacher;
