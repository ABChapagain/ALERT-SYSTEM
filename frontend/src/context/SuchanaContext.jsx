import { createContext, useReducer } from "react";
import SuchanaReducer from "./SuchanaReducer";
import axios from "axios";
import { useEffect } from "react";

const SuchanaContext = createContext();
const origin = process.env.REACT_APP_ORIGIN;

function SuchanaContextProvider({ children }) {
  const initialState = {
    loading: true,
    users: null,
    role: null,
    currentUser: null,
    alerts: null,
    singleUser: null,
  };

  const [state, dispatch] = useReducer(SuchanaReducer, initialState);

  //fetches all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${origin}/api/users`);
      const data = response.data;
      dispatch({ type: "GET_USERS", payload: data });
    } catch (e) {
      console.log(e);
    }
  };

  // this fetches current logged in user on the basis of email
  const checkCurrentUser = async (data) => {
    try {
      const response = await axios.get(`${origin}/api/users/${data.email}`);
      dispatch({ type: "CHECK_CURRENT_USER", payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };

  //this fetches single user on the basis of id provided
  const fetchUser = async (id) => {
    try {
      const response = await axios.get(`${origin}/api/users/single/${id}`);
      dispatch({ type: "GET_USER", payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };

  //fetches all users
  const fetchAlerts = async () => {
    try {
      const response = await axios.get(`${origin}/api/alerts`);
      dispatch({ type: "GET_ALERTS", payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SuchanaContext.Provider
      value={{
        ...state,
        fetchUsers,
        checkCurrentUser,
        fetchAlerts,
        fetchUser,
      }}
    >
      {children}
    </SuchanaContext.Provider>
  );
}

export default SuchanaContext;
export { SuchanaContextProvider };
