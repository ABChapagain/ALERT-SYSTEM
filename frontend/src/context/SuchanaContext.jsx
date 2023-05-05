import { createContext, useReducer } from "react";
import SuchanaReducer from "./SuchanaReducer";
import axios from "axios";

const SuchanaContext = createContext();

function SuchanaContextProvider({ children }) {
  const initialState = {
    loading: true,
    user: "",
    role: "",
    hello: ""
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

  const checkUser = async (data) => {
    try {
      const response = await axios.post(
        `api/users/check`,
        data
      );
      const user = response.data.user;
      dispatch({ type: "GET_USER", payload: user });
    } catch (error) {
      //console.error(error);
    }
  };


  return (
    <SuchanaContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </SuchanaContext.Provider>
  );
}

export default SuchanaContext;
export { SuchanaContextProvider };
