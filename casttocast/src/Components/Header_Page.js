import React, { useState, useEffect } from "react";
import axios from "axios";
import { pickTwoRandomObjects, actorsList } from "./TopActors";
import "../index.css";

// to do here: 1. add a moves counting function
function HeaderPage() {
  return (
    <div>
      <div className="centered-text">Moves: </div>;
      <div className=".actor1">
        <ul>
          {actorsList.map((actor) => (
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
    </div>
  );
}
export default HeaderPage;
