import React, { useState, useEffect } from "react";
import axios from "axios";
import { pickTwoRandomObjects, useActorProfilePath } from "./Functions";
import "../index.css";

// this commend is crushing:
//console.log(pickTwoRandomObjects(actorsList));

// const response = await axios.get(`http://localhost:3001/api/`);

// to do here: 1. add a moves counting function , 2. put a hr tag

function HeaderPage() {
  const [actors, setActors] = useState([]);
  const [actorId1, setActorId1] = useState(null);
  const [actorId2, setActorId2] = useState(null);

  const TwoRandomactors = () => {
    useEffect(() => {
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

      fetchTopActors();
    }, []);

    useEffect(() => {
      if (actors.length > 0) {
        const { actorId1, actorId2 } = pickTwoRandomObjects(actors);
        setActorId1(actorId1);
        setActorId2(actorId2);
      }
    }, [actors]);
  };

  TwoRandomactors();
  console.log(useActorProfilePath(actorId1));

  return (
    <div>
      <div className="centered-text">Moves:?? </div>
      <div className="actor1">
        <ul>
          <img
            src={`https://image.tmdb.org/t/p/w500${useActorProfilePath(
              actorId1
            )}`}
          ></img>
        </ul>
      </div>
      <div className="actor2">
        <ul>
          <img
            src={`https://image.tmdb.org/t/p/w500${useActorProfilePath(
              actorId2
            )}`}
          ></img>
        </ul>
      </div>
    </div>
  );
}

export default HeaderPage;
