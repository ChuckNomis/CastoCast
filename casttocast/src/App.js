import Appcast from "./Components/TopActors";
import ActorsList from "./Components/TopActors";
import ActorSearch from "./Components/ActorSearch";
import HeaderPage from "./Components/Header_Page";
import DetailsView from "./Components/HTP";
import React, { useState } from "react";

function App() {
  const [selectedActorId, setSelectedActorId] = useState(976);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [selectedMovieType, setSelectedMovieType] = useState(null);

  const handleBackClick = () => {
    // Implement logic to go back
    setSelectedActorId(null);
    setSelectedMovieId(null);
    setSelectedMovieType(null);
  };

  const handleMovieClick = (movieId,creditType) => {
    // Implement logic to switch to movie details using movieId
    setSelectedMovieId(movieId);
    setSelectedMovieType(creditType);
    setSelectedActorId(null);
  };

  const handleActorClick = (actorId) => {
    // Implement logic to switch to actor details using actorId
    setSelectedActorId(actorId);
    setSelectedMovieId(null);
    setSelectedMovieType(null);
  };

  return (
    <div>
      {/* Render other components as needed */}

      <DetailsView
        actorId={selectedActorId}
        movieId={selectedMovieId}
        movieType={selectedMovieType}
        onBackClick={handleBackClick}
        onMovieClick={handleMovieClick}
        onActorClick={handleActorClick}
      />
    </div>
  );
}

export default App;
