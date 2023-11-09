import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ActorSearchStyle.css";

function ActorSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedActor, setSelectedActor] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (selectedActor) {
      fetchActorMovies(selectedActor.id);
    }
  }, [selectedActor]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const apiKey = "a3d7cc20442b9124e3ef7d9d2f45a2f9"; // Replace with your TMDb API key
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${searchQuery}`
      );
      const searchResults = response.data.results;
      setSelectedActor(null); // Reset selectedActor
      setMovies([]); // Reset movies list
      if (searchResults.length > 0) {
        setSelectedActor(searchResults[0]); // Select the first actor from search results
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchActorMovies = async (actorId) => {
    try {
      const apiKey = "a3d7cc20442b9124e3ef7d9d2f45a2f9"; // Replace with your TMDb API key
      const response = await axios.get(
        `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${apiKey}`
      );
      const actorMovies = response.data.cast;
      setMovies(actorMovies);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <h1>Actor Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for an actor..."
        />
        <button type="submit">Search</button>
      </form>
      {selectedActor && (
        <div>
          <h2>{selectedActor.name}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${selectedActor.profile_path}`}
            alt={selectedActor.name}
          />
        </div>
      )}
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActorSearch;
