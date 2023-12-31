const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

app.use(express.json()); // Handle JSON requests
app.use(cors()); // Allow requests from all origins

//Put Movie id and get Actors Objects
app.get("/api/getActorsByMovie/:movieid/:movieType", async (req, res) => {
  try {
    const apiKey = "a3d7cc20442b9124e3ef7d9d2f45a2f9";
    const movieid = req.params.movieid;
    const movieType = req.params.movieType;
    const isMovie = movieType.toLowerCase() === 'movie';
    const endpoint = isMovie
    ? `https://api.themoviedb.org/3/movie/${movieid}/credits`
    : `https://api.themoviedb.org/3/tv/${movieid}/aggregate_credits`;
    const response = await axios.get(`${endpoint}?api_key=${apiKey}`);
    const cast = response.data.cast;
    res.json(cast);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Put actor id and get movies array
app.get("/api/getMoviesByActor/:actorid", async (req, res) => {
  try {
    const apiKey = "a3d7cc20442b9124e3ef7d9d2f45a2f9";
    const actorId = req.params.actorid;
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/${actorId}/combined_credits?api_key=${apiKey}`
    );
    const movies = response.data.cast;
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//get actor by actor id
app.get("/api/getActor/:actorId", async (req, res) => {
  try {
    const apiKey = "a3d7cc20442b9124e3ef7d9d2f45a2f9";
    const actorId = req.params.actorId;
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}`
    );
    const actor = response.data;
    res.json(actor);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/getMovie/:movieId", async (req, res) => {
  try {
    const apiKey = "a3d7cc20442b9124e3ef7d9d2f45a2f9";
    const movieId = req.params.movieId;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
    );
    const movie = response.data;
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/getTvshow/:tvshowId", async (req, res) => {
  try {
    const apiKey = "a3d7cc20442b9124e3ef7d9d2f45a2f9";
    const tvshowId = req.params.tvshowId;
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvshowId}?api_key=${apiKey}`
    );
    const tvshow = response.data;
    console.log(response.data);
    res.json(tvshow);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//get top actors
app.get("/api/getTopActors/:page", async (req, res) => {
  try {
    const apiKey = "a3d7cc20442b9124e3ef7d9d2f45a2f9";
    const page = req.params.page;
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&page=${page}`
    );
    const topActorsList = response.data.results;
    res.json(topActorsList);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 3001; // Use the port of your choice
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
