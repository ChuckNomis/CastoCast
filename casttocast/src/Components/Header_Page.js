import React, { useState, useEffect } from "react";
import axios from "axios";
import { pickTwoRandomObjects, actorsList } from "./TopActors";
import "../index.css";

// to do here: 1. add a moves counting function
// this commend is crushing:
// const { id1, id2 } = pickTwoRandomObjects(actorsList);

//const response = await axios.get(`http://localhost:3001/api/`);

function HeaderPage() {
  return (
    <div>
      <div className="centered-text">Moves: </div>;
      <div className=".actor1"></div>
    </div>
  );
}
export default HeaderPage;
