import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";



function TopFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function pickTwoRandomObjects(arr) {
  const randomIndex1 = Math.floor(Math.random() * arr.length);
  let randomIndex2 = randomIndex1;

  while (randomIndex2 === randomIndex1) {
    randomIndex2 = Math.floor(Math.random() * arr.length);
  }
  const actorId1 = arr[randomIndex1];
  const actorId2 = arr[randomIndex2];
  return { actorId1, actorId2 };
}
function pickonerandom(arr) {
  const randomIndex1 = Math.floor(Math.random() * arr.length);
  return randomIndex1;
}

function useActorProfilePath(id) {
  const [path, setPath] = useState([]);

  useEffect(() => {
    const fetchPath = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/getActor/${id}`
        );
        const path = response.data;
        setPath(path.profile_path);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPath();
  }, [id]);

  return path;
}

export { pickTwoRandomObjects, pickonerandom, useActorProfilePath, TopFunction};




