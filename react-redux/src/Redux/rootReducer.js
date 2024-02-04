import { combineReducers } from "redux";

import cakeReducer from "./Cakes/cakeReducer";
import { iceCreamReducer } from "./IceCream/iceCreamReducer";
import userReducer from "./Users/userReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});
