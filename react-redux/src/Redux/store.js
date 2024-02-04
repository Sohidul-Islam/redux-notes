import { combineReducers, createStore } from "redux";

import cakeReducer from "./Cakes/cakeReducer";
import { iceCreamReducer } from "./IceCream/iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
});

const store = createStore(rootReducer);

export default store;
