import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./usersActionTypse";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

// fetch user success
export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

// fetch user failure
export const fetchUserError = (error = "") => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  console.log("call use fetchUsers");
  return (dispatch) => {
    console.log("call");
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data
        const users = response.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        // error.message
        dispatch(fetchUserError(error));
      });
  };
};
