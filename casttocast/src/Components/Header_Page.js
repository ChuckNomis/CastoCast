import React, { useState, useEffect } from "react";
import axios from "axios";
import { pickonerandom, pickTwoRandomObjects } from "./Functions";
import "../index.css";

// this commend is crushing:
//console.log(pickTwoRandomObjects(actorsList));

// const response = await axios.get(`http://localhost:3001/api/`);

// to do here: 1. add a moves counting function , 2. put a hr tag
function HeaderPage() {
  function TwoRandomactors() {
    const [actors, setActors] = useState([]);

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
        return actorId1, actorId2;
      }
    }, [actors]);
  }
  useEffect(() => {}, []);
  return (
    <div>
      <div className="centered-text">Moves:?? </div>
      <div className=".actor1"></div>
    </div>
  );
}
export default HeaderPage;
