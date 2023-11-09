import React, { useState, useEffect } from "react";
import axios from "axios";

function DetailsView({ actorId, movieId }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchData = async (id, type) => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/${type}/${id}`
        );
        setDetails(response.data);
      } catch (error) {
        console.error(`Error fetching ${type} data:`, error);
      }
    };

    if (actorId) {
      fetchData(actorId, "getActorDetails");
    } else if (movieId) {
      fetchData(movieId, "getMovieDetails");
    }
  }, [actorId, movieId]);

  if (!details) {
    return <div>Loading...</div>;
  }

  const handleClick = () => {
    setDetails(null);
  };

  return (
    <div className="DetailsView">
      <button onClick={handleClick}>Back</button>
      <h2>{details.name || details.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${details.profile_path || details.poster_path}`}
        alt={details.name || details.title}
      />
      <ul>
        {details.cast &&
          details.cast.map((actor) => (
            <li key={actor.id}>
              <h3>{actor.name}</h3>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default DetailsView;