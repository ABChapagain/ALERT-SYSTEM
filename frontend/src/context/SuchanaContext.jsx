import { createContext, useReducer } from "react";
import SuchanaReducer from "./SuchanaReducer";
import axios from "axios";

const SuchanaContext = createContext();
const origin = process.env.REACT_APP_ORIGIN;

function SuchanaContextProvider({ children }) {
  const initialState = {
    loading: true,
    users: null,
    role: "",
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

  const fetchLoggedUserInfo = async (email) => {
    try {
      const response = await axios.get(`${origin}/api/user`);
    } catch (e) {}
  };

  return (
    <SuchanaContext.Provider
      value={{
        ...state,
        fetchUsers,
        fetchLoggedUserInfo,
      }}
    >
      {children}
    </SuchanaContext.Provider>
  );
}

export default SuchanaContext;
export { SuchanaContextProvider };
