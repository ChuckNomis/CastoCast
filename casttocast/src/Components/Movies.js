import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2Q3Y2MyMDQ0MmI5MTI0ZTNlZjdkOWQyZjQ1YTJmOSIsInN1YiI6IjY0YTY4NDE4MmI1MzFkMDE0NTg0NmRlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.24FzVf-avK_19ys5PwMLCZuGA8BOQ5bhtFj28GrYY1U";
  });
};

function Movie() {
  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2Q3Y2MyMDQ0MmI5MTI0ZTNlZjdkOWQyZjQ1YTJmOSIsInN1YiI6IjY0YTY4NDE4MmI1MzFkMDE0NTg0NmRlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.24FzVf-avK_19ys5PwMLCZuGA8BOQ5bhtFj28GrYY1U"
    )
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  useEffect(() => {
    getMovie();
  }, []);
}

export default Movie;
