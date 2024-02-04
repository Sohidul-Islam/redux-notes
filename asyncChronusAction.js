/*
Synchronous Action
As soon as an action was dispatched, the state was immediately updated
If you dispatch the BUY_CAKE action, the numOfCakes was right away decremented by 1 same with BUY_ICECREAM action is well.
*/

/*
Asynchronous Action
Asynchronous API Calls to fetch data from an end point and use that data in your application
*/

/*
here we user axios to fetch data.
Requests to an API end Point


install --> npm install axios

redux thunk
--------------
Define async action creators.
Middleware

install --> npm install redux-thunk

install both --> npm install axios redux-thunk
*/

// initialize redux and redux store

const redux = require("redux");
const thunk = require("redux-thunk").thunk;
const axios = require("axios");
const applyMiddleWare = redux.applyMiddleware;

const createStore = redux.createStore;

// initialState
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// action type names
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// action creators list
// -------------------------
const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

// fetch user success
const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

// fetch user failure
const fetchUserError = (error = "") => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action?.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action?.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action?.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

// action creator

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data
        const users = response.data.map((user) => user.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        // error.message
        dispatch(fetchUserError(error));
      });
  };
};

const store = createStore(reducer, applyMiddleWare(thunk));

console.log("Initial data output: ", store.getState());

store.subscribe(() => {
  console.log("data output: ", store.getState());
});

store.dispatch(fetchUsers());
