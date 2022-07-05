import {
  ADD_DATA_SCORE,
  FAILED_ADD_DATA_SCORE,
  FAILED_GET_DATA_SCORE,
  GET_DATA_SCORE,
  GET_DETAIL_SCORE,
  REMOVE_ADD_DATA_SCORE,
} from "../../action/action-type";

const intitalState = {
  getData: {
    data: [],
    error: "",
    isFetching: true,
    loadingBar: 0,
  },

  postData: {
    data: [],
    error: "",
    isFetching: true,
    loadingBar: 0,
    refresh: null,
  },

  detail: {
    data: [],
    loadingBar: 0,
    loading: true,
    error: [],
  },
};

const score = (state = intitalState, action) => {
  switch (action.type) {
    case GET_DATA_SCORE: {
      return {
        ...state,
        getData: {
          data: action.payload,
          isFetching: false,
          loadingBar: 100,
        },
      };
    }
    case FAILED_GET_DATA_SCORE: {
      return {
        ...state,
        getData: {
          error: action.payload,
          isFetching: false,
          loadingBar: 100,
        },
      };
    }
    case ADD_DATA_SCORE: {
      return {
        ...state,
        postData: {
          data: action.payload,
          isFetching: false,
          loadingBar: 100,
          refreshPage: true,
        },
      };
    }
    case FAILED_ADD_DATA_SCORE: {
      return {
        ...state,
        postData: {
          error: action.payload,
          isFetching: false,
          loadingBar: 100,
          refreshPage: false,
        },
      };
    }
    case REMOVE_ADD_DATA_SCORE: {
      return {
        ...state,
        postData: {
          data: {},
        },
      };
    }

    // detail
    case GET_DETAIL_SCORE: {
      return {
        ...state,
        detail: {
          data: action.data,
          loading: false,
          loadingBar: 100,
        },
      };
    }
    case FAILED_ADD_DATA_SCORE: {
      return {
        ...state,
        detail: {
          error: action.error,
          loadingBar: 100,
          loading: false,
        },
      };
    }

    default:
      return state;
  }
};

export default score;
