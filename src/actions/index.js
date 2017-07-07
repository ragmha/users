import axios from "axios";

const FETCH_USERS = "FETCH_USERS";

export function fetchUsers() {
  const request = axios.get("http://jsonplaceholder.typicode.com/users");
  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: FETCH_USERS, payload: data });
    });
  };
}
