// initialize redux
const redux = require("redux");

// create combine reducer here..
const combinedReducerStore = redux.combineReducers;

const createStore = redux.createStore;

// inital state value

const cakeInitial = {
  numberOfCake: 10,
};
const iceCreameInitial = {
  numberOfIceCream: 20,
};

// create action type...
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// action list.
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux code",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// reducer list
const cakeReducer = (state = cakeInitial, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCake: state?.numberOfCake - 1,
      };
    default:
      return {
        ...state,
      };
  }
};

const iceCreamReducer = (state = iceCreameInitial, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCream: state?.numberOfIceCream - 1,
      };
    default:
      return {
        ...state,
      };
  }
};

// setup store
const rootReducer = combinedReducerStore({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
// get initial state
console.log("initialstate", store.getState());

// anytime when state updates this will call
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
