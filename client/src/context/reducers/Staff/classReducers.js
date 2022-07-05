import {
  ADD_DATA_CLASSROOM,
  DELETE_DATA_CLASSROM,
  FAILED_ADD_DATA_CLASSROOM,
  FAILED_DELETE_DATA_CLASSROM,
  FAILED_GET_DATA_CLASSROM,
  FAILED_UPDATE_CLASSROOM,
  GET_DATA_CLASSROOM,
  GET_DETAIL_CLASSROOM,
  REMOVE_ADD_CLASSROOM,
  REMOVE_DETAIL_CLASSROOM,
  REQUEST_DETAIL_CLASSROOM,
  SUCCESS_UPDATE_CLASSROOM,
} from "../../action/action-type";

const initialState = {
  data: [],
  loadingBar: 0,
  isFetching: true,
  error: [],

  update: {},
  dataUpdate: [],
  isFetchingUpdate: true,
  add: {
    error: [],
    message: [],
    refreshPage: null,
  },
};

const classRoomList = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_CLASSROOM: {
      return {
        ...state,
        loadingBar: 100,
        isFetching: false,
        data: action.payload,
      };
    }
    case FAILED_GET_DATA_CLASSROM: {
      return {
        ...state,
        loadingBar: 100,
        isFetching: false,
        data: action.payload,
      };
    }
    case ADD_DATA_CLASSROOM: {
      return {
        ...state,
        loadingBar: 100,
        isFetching: false,
        add: { message: action.payload },
      };
    }
    case REMOVE_ADD_CLASSROOM: {
      return {
        ...state,
        add: {},
      };
    }
    case FAILED_ADD_DATA_CLASSROOM: {
      return {
        ...state,
        loadingBar: 100,
        isFetching: false,
        add: action.error,
      };
    }
    case DELETE_DATA_CLASSROM: {
      return {
        ...state,
        loadingBar: 100,
        isFetching: false,
      };
    }
    case FAILED_DELETE_DATA_CLASSROM: {
      return {
        ...state,
        loadingBar: 100,
        isFetching: false,
        error: action.error,
      };
    }
    case REQUEST_DETAIL_CLASSROOM: {
      return {
        ...state,
        loadingBar: 100,
        isFetchingUpdate: true,
      };
    }
    case GET_DETAIL_CLASSROOM: {
      return {
        ...state,
        loadingBar: 100,
        isFetchingUpdate: false,
        dataUpdate: action.payload,
      };
    }
    case REMOVE_DETAIL_CLASSROOM: {
      return {
        ...state,
        loadingBar: 100,
        isFetchingUpdate: false,
        dataUpdate: {},
      };
    }
    case FAILED_GET_DATA_CLASSROM: {
      return {
        ...state,
        loadingBar: 100,
        isFetchingUpdate: false,
        error: action.error,
      };
    }
    case SUCCESS_UPDATE_CLASSROOM: {
      return {
        ...state,
        loadingBar: 100,
        isFetchingUpdate: false,
        update: action.payload,
      };
    }
    case FAILED_UPDATE_CLASSROOM: {
      return {
        ...state,
        loadingBar: 100,
        isFetchingUpdate: false,
        refreshPage: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default classRoomList;
