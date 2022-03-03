import {
  GET_DATA_STUDENT,
  FAILED_GET_DATA_STUDENT,
  GET_DETAIL_STUDENT,
  FAILED_GET_DETAIL_STUDENT,
  REMOVE_GET_DETAIL_STUDENT,
  DELETE_DATA_STUDENT,
  FAILED_DELETE_DATA_STUDENT,
  ADD_DATA_STUDENT,
  FAILED_ADD_DATA_STUDENT_VALIDATION,
  FAILED_ADD_DATA_STUDENT_MESSAGE_ERROR,
  FAILED_UPDATE_STUDENT_VALIDATION,
  FAILED_UPDATE_STUDENT_MESSAGE_ERROR,
  SUCCESS_UPDATE_STUDENT,
} from "../../action/action-type";

const initialState = {
  data: [],
  error: "",
  loadingBar: 0,
  isFetching: true,
  dataDetail: [],
  isFetchingUpdate: true,
  dataDelete: "",
  validationMessage: "",
  errorMessage: "",
  dataAdd: [],
  refreshPage: null,
  validationMessageUpdate: "",
  errorMessageUpdate: "",
  dataUpdate: "",

  // get Data
  getData: {
    data: [],
    error: [],
    loading: [],
    page: {},
  },
};

const student = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_STUDENT: {
      return {
        ...state,
        loadingBar: 100,
        getData: {
          ...state.getData,
          data: action.payload,
          page: action.page,
          loading: false,
        },
      };
    }
    case FAILED_GET_DATA_STUDENT: {
      return {
        ...state,
        loadingBar: 100,
        getData: {
          ...state.getData,
          error: action.payload,
          loading: false,
        },
      };
    }
    case GET_DETAIL_STUDENT: {
      return {
        ...state,
        loading: true,
        loadingBar: 100,
        dataDetail: action.data,
        isFetchingUpdate: false,
      };
    }
    case FAILED_GET_DETAIL_STUDENT: {
      return {
        ...state,
        loading: true,
        loadingBar: 100,
        error: action.error,
        isFetchingUpdate: false,
      };
    }
    case REMOVE_GET_DETAIL_STUDENT: {
      return {
        ...state,
        loading: true,
        loadingBar: 100,
        dataDetail: {},
        isFetchingUpdate: {},
        getData: {
          ...state,
          data: {},
        },
      };
    }
    case DELETE_DATA_STUDENT: {
      return {
        ...state,
        loadingBar: 100,
        dataDelete: action.payload,
        isFetching: false,
      };
    }
    case FAILED_DELETE_DATA_STUDENT: {
      return {
        ...state,
        loadingBar: 100,
        error: action.error,
        isFetching: false,
      };
    }
    case ADD_DATA_STUDENT: {
      return {
        ...state,
        isFetching: false,
        dataAdd: action.payload,
        loadingBar: 100,
        refreshPage: true,
      };
    }
    case FAILED_ADD_DATA_STUDENT_VALIDATION: {
      return {
        ...state,
        isFetching: false,
        validationMessage: action.error,
        loadingBar: 100,
      };
    }
    case FAILED_ADD_DATA_STUDENT_MESSAGE_ERROR: {
      return {
        ...state,
        isFetching: false,
        errorMessage: action.error,
        loadingBar: 100,
      };
    }
    case FAILED_UPDATE_STUDENT_VALIDATION: {
      return {
        ...state,
        isFetching: false,
        validationMessageUpdate: action.error,
        loadingBar: 100,
      };
    }
    case FAILED_UPDATE_STUDENT_MESSAGE_ERROR: {
      return {
        ...state,
        isFetching: false,
        errorMessageUpdate: action.error,
        loadingBar: 100,
      };
    }
    case SUCCESS_UPDATE_STUDENT: {
      return {
        ...state,
        isFetching: false,
        dataUpdate: action.data,
        loadingBar: 100,
      };
    }
    default:
      return state;
  }
};

export default student;
