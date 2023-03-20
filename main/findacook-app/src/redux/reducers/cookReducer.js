import {
    CREATE_COOK,
    GET_COOK, 
    GET_COOKS
  } from "../constants/cookConstants";
  
  const INITIAL_STATE = {
    cooks: [],
  };
  
  const cookReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_COOK:
            return {
              cooks: [...state.cooks, action.payload],
            };
          case GET_COOKS:
            return {
              cooks: [...action.payload],
            };
      case GET_COOK:
        return {
          cook: action.payload,
        };
      default:
        return state;
    }
  };
  export default cookReducer;
  