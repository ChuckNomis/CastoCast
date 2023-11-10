import Appcast from "./Components/TopActors";
import ActorsList from "./Components/TopActors";
import ActorSearch from "./Components/ActorSearch";
import HeaderPage from "./Components/Header_Page";
import DetailsView from "./Components/HTP";
import React, { useState } from "react";

function App() {
  const [selectedActorId, setSelectedActorId] = useState(976);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleBackClick = () => {
    // Implement logic to go back
    setSelectedActorId(null);
    setSelectedMovieId(null);
  };

  const handleMovieClick = (movieId) => {
    // Implement logic to switch to movie details using movieId
    setSelectedMovieId(movieId);
    setSelectedActorId(null);
  };

  const handleActorClick = (actorId) => {
    // Implement logic to switch to actor details using actorId
    setSelectedActorId(actorId);
    setSelectedMovieId(null);
  };

  return (
    <div>
      {/* Render other components as needed */}
      
      
      
      <DetailsView
        actorId={selectedActorId}
        movieId={selectedMovieId}
        onBackClick={handleBackClick}
        onMovieClick={handleMovieClick}
        onActorClick={handleActorClick}
      />
    </div>
  );
}

export default App;
