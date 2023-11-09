import React, { useState, useEffect } from "react";
import axios from "axios";
import { pickonerandom } from "./Functions";

function Appcast() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchTopActors();
  }, []);

  const fetchTopActors = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/getTopActors`
      );
      const topActors = response.data;
      setActors(topActors);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <h1>Top 100 Actors</h1>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>
            <h2>{actor.name}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
            />
            <p>ID: {actor.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Appcast;
