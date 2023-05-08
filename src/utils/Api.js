import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "" + import.meta.env.VITE_API_URL;
const TOKEN = "" + import.meta.env.VITE_API_TOKEN;

const headers = {
  Authorization: "bearer " + TOKEN,
};

// export const fetchDataFromApi = async (url, params) => {
//   try {
//     const { data } = await axios.get(BASE_URL + url, {
//       headers,
//       params,
//     });
//     return data;
//   } catch (err) {
//     return err;
//   }
// };

// export function fetchPopularMoviesFromApi() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(BASE_URL + "/movie/popular", {
//         headers,
//       })
//       .then(({ data }) => {
//         setData(data.results);
//       })
//       .catch((err) => {
//         setError(err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);
//   return { data, loading, error };
// }

// export function fetchHomepageData() {
//   const [movies, setMovies] = useState([]);
//   const [shows, setShows] = useState([]);
//   const [loadingMovies, setLoadingMovies] = useState(true);
//   const [loadingShows, setLoadingShows] = useState(true);
//   const [errorMovies, setErrorMovies] = useState(null);
//   const [errorShows, setErrorShows] = useState(null);

//   useEffect(() => {
//     setLoadingMovies(true);
//     setLoadingShows(true);
//     axios
//       .get(BASE_URL + "/movie/popular", {
//         headers,
//       })
//       .then(({ data }) => {
//         setMovies(data.results);
//       })
//       .catch((err) => {
//         setErrorMovies(err);
//       })
//       .finally(() => {
//         setLoadingMovies(false);
//       });
//     //======================================
//     axios
//       .get(BASE_URL + "/tv/popular", {
//         headers,
//       })
//       .then(({ data }) => {
//         setShows(data.results);
//       })
//       .catch((err) => {
//         setErrorShows(err);
//       })
//       .finally(() => {
//         setLoadingShows(false);
//       });
//   }, []);

//   return {
//     data: { movies: movies, shows: shows },
//     loading: { loadingMovies: loadingMovies, loadingShows: loadingShows },
//     error: { errorMovies: errorMovies, errorShows: errorShows },
//   };
// }

export function fetchHomepageData() {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState(true);
  const [loadingShows, setLoadingShows] = useState(true);
  const [errorMovies, setErrorMovies] = useState(null);
  const [errorShows, setErrorShows] = useState(null);

  useEffect(() => {
    setLoadingMovies(true);
    setLoadingShows(true);
    axios
      .get(BASE_URL + "/movie/popular", {
        headers,
      })
      .then((response1) => {
        //Movies returned successfully
        return axios
          .get(BASE_URL + "/genre/movie/list", {
            headers,
          })
          .then((response2) => {
            //Movie genres returned successfully
            response1.data.results.map((movie) => {
              movie.genres = [];
              movie.genresAsText = "";
              for (let i = 0; i < movie.genre_ids.length; i++) {
                for (let j = 0; j < response2.data.genres.length; j++) {
                  if (movie.genre_ids[i] === response2.data.genres[j].id) {
                    movie.genres.push(response2.data.genres[j]);
                    movie.genresAsText =
                      movie.genresAsText + ", " + response2.data.genres[j].name;
                    break;
                  }
                }
              }
              movie.genresAsText = movie.genresAsText.slice(2);
            });
            setMovies(response1.data.results);
          });
      })
      .catch((err) => {
        setErrorMovies(err);
      })
      .finally(() => {
        setLoadingMovies(false);
      });
    //======================================
    axios
      .get(BASE_URL + "/tv/popular", {
        headers,
      })
      .then((response1) => {
        return axios
          .get(BASE_URL + "/genre/tv/list", {
            headers,
          })
          .then((response2) => {
            response1.data.results.map((show) => {
              show.genres = [];
              show.genresAsText = "";
              for (let i = 0; i < show.genre_ids.length; i++) {
                for (let j = 0; j < response2.data.genres.length; j++) {
                  if (show.genre_ids[i] === response2.data.genres[j].id) {
                    show.genres.push(response2.data.genres[j]);
                    show.genresAsText =
                      show.genresAsText + ", " + response2.data.genres[j].name;
                    break;
                  }
                }
              }
              show.genresAsText = show.genresAsText.slice(2);
            });
            setShows(response1.data.results);
          });
      })
      .catch((err) => {
        setErrorShows(err);
      })
      .finally(() => {
        setLoadingShows(false);
      });
  }, []);

  return {
    data: { movies: movies, shows: shows },
    loading: { loadingMovies: loadingMovies, loadingShows: loadingShows },
    error: { errorMovies: errorMovies, errorShows: errorShows },
  };
}
