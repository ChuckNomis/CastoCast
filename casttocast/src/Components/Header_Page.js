import React, { useState, useEffect } from "react";
import axios from "axios";
import { actorsList } from "./TopActors";
import "../index.css";
import { pickonerandom } from "./Functions";

// this commend is crushing:
//console.log(pickTwoRandomObjects(actorsList));

// const response = await axios.get(`http://localhost:3001/api/`);

// to do here: 1. add a moves counting function , 2. put a hr tag
function HeaderPage() {
  return (
    <div>
      <div className="centered-text">Moves: </div>
      <div className=".actor1"></div>
    </div>
  );
}
export default HeaderPage;
/*
actors[randomindex].id
{
  "adult": false,
  "gender": 1,
  "id": 2283930,
  "known_for_department": "Acting",
  "name": "Pipper Rubio",
  "original_name": "Pipper Rubio",
  "popularity": 202.325,
  "profile_path": "/x8tDKAgxMKwaNJSd9RB75EIJnOD.jpg",
  "known_for": [
      {
          "adult": false,
          "backdrop_path": "/7NRGAtu8E4343NSKwhkgmVRDINw.jpg",
          "id": 507089,
          "title": "Five Nights at Freddy's",
          "original_language": "en",
          "original_title": "Five Nights at Freddy's",
          "overview": "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
          "poster_path": "/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg",
          "media_type": "movie",
          "genre_ids": [
              27,
              9648
          ],
          "popularity": 2260.734,
          "release_date": "2023-10-25",
          "video": false,
          "vote_average": 8.144,
          "vote_count": 1781
      },
      {
          "adult": false,
          "backdrop_path": "/itLnzp64tAr6beI5LDo3mdkExZA.jpg",
          "id": 737793,
          "title": "Holly & Ivy",
          "original_language": "en",
          "original_title": "Holly & Ivy",
          "overview": "When Melody’s neighbor, Nina, learns that her illness has returned, Melody promises to keep Nina’s kids, Holly & Ivy, together. To adopt the children, she must renovate her new fixer-upper, which she does with the help of contractor, Adam.",
          "poster_path": "/9BTjwJbLrFfgsJyEmq5zLTQEPCA.jpg",
          "media_type": "movie",
          "genre_ids": [
              10749,
              10770
          ],
          "popularity": 7.963,
          "release_date": "2020-11-01",
          "video": false,
          "vote_average": 7.2,
          "vote_count": 22
      },
      {
          "adult": false,
          "backdrop_path": "/qDCsU4CegdCGJMk119H52LQMEoF.jpg",
          "id": 79787,
          "name": "Coop & Cami Ask The World",
          "original_language": "en",
          "original_name": "Coop & Cami Ask The World",
          "overview": "A pair of middle-school siblings make nearly all of their decisions by crowdsourcing the opinions of their millions of online followers.",
          "poster_path": "/cxsG4ej3v7r6m1ZBrECSR9e6Fgw.jpg",
          "media_type": "tv",
          "genre_ids": [
              10751,
              35
          ],
          "popularity": 36.746,
          "first_air_date": "2018-10-12",
          "vote_average": 7.9,
          "vote_count": 36,
          "origin_country": [
              "US"
          ]
      }
  ]
}*/
