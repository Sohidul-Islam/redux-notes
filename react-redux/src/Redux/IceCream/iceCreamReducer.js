import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState = {
  numberOfIceCream: 10,
};

export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: {
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
