import { createContext, useReducer } from "react";
import SuchanaReducer from "./SuchanaReducer";
import axios from "axios";

const SuchanaContext = createContext();

function SuchanaContextProvider({ children }) {
  const initialState = {
    loading: true,
    users: null,
    role: "",
  };

  const [state, dispatch] = useReducer(SuchanaReducer, initialState);

  //   const fetchTrendingMovies = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://api.themoviedb.org/3/trending/movie/day?api_key=${state.apiKey}`,
  //         {
  //           headers: {
  //             Authorization: state.token,
  //           },
  //         }
  //       );
  //       const trendingMovies = response.data.results;
  //       dispatch({ type: "GET_TRENDING_MOVIES", payload: trendingMovies });
  //     } catch (error) {
  //       //console.error(error);
  //     }
  //   };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users/auth");
      const data = response.data;
      dispatch({ type: "GET_USERS", payload: data });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SuchanaContext.Provider
      value={{
        ...state,
        fetchUsers,
      }}
    >
      {children}
    </SuchanaContext.Provider>
  );
}

export default SuchanaContext;
export { SuchanaContextProvider };
