import React, { useState, useEffect } from "react";
import axios from "axios";

function ActorDetails({ actorId }) {
  const [actor, setActor] = useState(null);
  const [movies, setmovies] = useState([]);
  useEffect(() => {


    const fetchActorDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/getActorDetails/${actorId}`);
        setActor(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchActorDetails();


    const fetchActorMovies = async (actorId) => {
      try {
        const response = await axios.get(`http://localhost:3001/api/getMoviesByActor/${actorId}`);
        console.log(response.data);
        setmovies(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchActorMovies();
  }, [actorId]);

  if (!actor) {
    return null; // Render nothing while data is loading
  }


  return (
    <div className="ActorDetails">
      <h2>{actor.name}</h2>
      <button
        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
        alt={actor.name}
      />
    </div>
  );
}

export default ActorDetails;
