import * as actionType from "../../actionType/actionTypeStudent";

const intitalState = {
  GET: {
    data: [],
    error: "",
    loading: true,
    loadingBar: 0,
  },
};

const score = (state = intitalState, action) => {
  switch (action.type) {
    case actionType.GET_SCORE: {
      return {
        ...state,
        GET: {
          data: action.payload,
          loading: false,
          loadingBar: 100,
        },
      };
    }
    case actionType.FAILED_GET_SCORE: {
      return {
        ...state,
        GET: {
          error: action.payload,
          loading: false,
          loadingBar: 100,
        },
      };
    }

    default:
      return state;
  }
};

export default score;
