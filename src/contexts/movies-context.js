import { createContext, useEffect, useState } from "react";
import axios from "axios";

const initStates = {
  page: 1,
  fullName: 1,
  movies: [],
  setPage: () => {},
  setFullName: () => {}
};

export const MoviesContext = createContext(initStates);

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [fullName, setFullName] = useState("Murat Özenç");

  useEffect(() => {
    (async function () {
      const response = await axios.get(`https://63ac87a934c46cd7ae84aec1.mockapi.io/api/v1/movies?page=${page}&limit=9`);
      setMovies(response.data);
    })();
  }, [page]);

  return (
    <MoviesContext.Provider value={{
      movies,
      fullName,
      page,
      setPage,
      setFullName
    }}>
      {children}
    </MoviesContext.Provider>
  )
}

export default MoviesProvider;
