import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState = {
  numbOficeCream: 10,
};

export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: {
      return {
        ...state,
        numbOficeCream: state.numbOficeCream - 1,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
