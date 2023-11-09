import React, { useState, useEffect } from "react";
import "./ActorSearchStyle.css";
import axios from "axios";

function Appcast() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchTopActors();
  }, []);

  const fetchTopActors = async () => {
    try {
      const apiKey = "a3d7cc20442b9124e3ef7d9d2f45a2f9"; // Replace with your TMDb API key
      // const totalPages = 2; // You can adjust this number to get more or fewer actors

      let topActors = [];
      const response = await axios.get(
        `http://localhost:3001/api/getTopActors`
      );
      const actorsOnPage = response.data;
      topActors = [...topActors, ...actorsOnPage];

      // for (let page = 1; page <= totalPages; page++) {
      //   const response = await axios.get(
      //     `http://localhost:3001/api/getTopActors/${page}`
      //   );
      //   // console.log(response.data);
      //   const actorsOnPage = response.data;
      //   topActors = [...topActors, ...actorsOnPage];
      // }

      setActors(topActors);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    // this is for the function "pickTwoRandomObjects" nadav dont touch
    const actorsList = new Array();
    actors.map((actor) => actorsList.push([actor.id, actor.name]));
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
// this function pick 2 random actors from the top actors - nadav dont touch please
function pickTwoRandomObjects(arr) {
  const randomIndex1 = Math.floor(Math.random() * arr.length);
  let randomIndex2 = randomIndex1;

  while (randomIndex2 === randomIndex1) {
    randomIndex2 = Math.floor(Math.random() * arr.length);
  }
  const object1 = arr[randomIndex1];
  const object2 = arr[randomIndex2];
  return object1, object2;
}
export { pickTwoRandomObjects };
export default Appcast;
