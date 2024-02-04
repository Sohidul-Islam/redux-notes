import { combineReducers } from "redux";

import cakeReducer from "./Cakes/cakeReducer";
import { iceCreamReducer } from "./IceCream/iceCreamReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
