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
  const [actorName1, setActorName1] = useState(null);
  const [actorName2, setActorName2] = useState(null);
  const TwoRandomactors = () => {
    useEffect(() => {
      const fetchActors = async () => {
        try {
          const actorsList = [];
          const totalPages = 20;
          for (let page = 1; page <= totalPages; page++) {
            const response = await axios.get(
              `http://localhost:3001/api/getTopActors/${page}`
            );
            actorsList.push(...response.data);
          }
          setActors(actorsList);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchActors();
    }, []);

    useEffect(() => {
      if (actors.length > 0) {
        const { actorId1, actorId2 } = pickTwoRandomObjects(actors);
        setActorId1(actorId1.id);
        setActorId2(actorId2.id);
        setActorName1(actorId1.name);
        setActorName2(actorId2.name);
      }
    }, [actors]);
  };

  TwoRandomactors();

  return (
    <header className="header">
      <div className="actor1">
        <ul>
          <p>{actorName1}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${useActorProfilePath(
              actorId1
            )}`}
          ></img>
        </ul>
      </div>
      <div className="actor2">
        <ul>
          <p>{actorName2}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${useActorProfilePath(
              actorId2
            )}`}
          ></img>
        </ul>
      </div>
    </header>
  );
}

export default HeaderPage;
