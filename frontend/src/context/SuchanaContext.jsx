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
  };

  const [state, dispatch] = useReducer(SuchanaReducer, initialState);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${origin}/api/users`);
      const data = response.data;
      dispatch({ type: "GET_USERS", payload: data });
    } catch (e) {
      console.log(e);
    }
  };

  const checkCurrentUser = async (data) => {
    try {
      // const response = await axios.get(`${origin}/api/user`);
      dispatch({ type: "CHECK_CURRENT_USER", payload: data });
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
      }}
    >
      {children}
    </SuchanaContext.Provider>
  );
}

export default SuchanaContext;
export { SuchanaContextProvider };
