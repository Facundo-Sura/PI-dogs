import { GET_DOGS, GET_BY_BREED } from "../actions";

let initialState = { allDogs: [], userCopy: [], posts: [] };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        allDogs: action.payload,
        userCopy: action.payload,
      };
    case GET_BY_BREED:
      return {
        ...state,
        allDogs: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
