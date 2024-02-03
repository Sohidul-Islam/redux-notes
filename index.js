// import redux from "redux";
const redux = require("redux");
// initialize redux libraries

// create redux store here..
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "First redux action",
  };
}

// reducer
// (previousState,action)=> newState

// initial state
const initalstate = {
  numOfCakes: 10,
  numberOfIceCreams: 20,
};

const reducer = (state = initalstate, action) => {
  switch (action?.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    default:
      return state;
  }
};

// store

/* Responsibility of the store: 
Holds application state --> createStore(reducer,)
Allows access to state via getState()
Allows state to be updated via dispatch(action)
Registers listeners via subscribe(listener)
Hnadles unregistering of listenrers via the function returned by subscribe(listener)
*/

const store = createStore(reducer); // create redux store here
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
