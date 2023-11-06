import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = "a3d7cc20442b9124e3ef7d9d2f45a2f9";
    const apiURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    axios
      .get(apiURL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="grid-container">
        {movies.map((movie) => (
          <div className="grid-item" key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
