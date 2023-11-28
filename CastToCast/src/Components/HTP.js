import React, { useState, useEffect } from "react";
import axios from "axios";

function DetailsView({ movieType, actorId, movieId, onBackClick, onMovieClick, onActorClick }) {
  const [details, setDetails] = useState(null);
  const [Credits, setCredits] = useState([]);
  const [Cast, setCast] = useState([]);
  let idList = [];

  const isIdInList = (id) =>{
    return idList.includes(id)
  }

  useEffect(() => {
    const fetchData = async (id, type) => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/${type}/${id}`
        );
        console.log(response.data);
        setDetails(response.data);
      } catch (error) {
        console.error(`Error fetching ${type} data:`, error);
      }
    };

    const fetchActorMovies = async (actorId) => {
      try {
        const response = await axios.get(`http://localhost:3001/api/getMoviesByActor/${actorId}`);
        console.log(response.data);
        const actorMovies = response.data;
        setCredits(actorMovies);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchMovieActors = async (movieId, movieType) => {
      try {
        const response = await axios.get(`http://localhost:3001/api/getActorsByMovie/${movieId}/${movieType}`);
        console.log(response.data);
        setCast(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    


    const isMovie = movieType && movieType.toLowerCase() === 'movie';
    if (actorId) {
      fetchData(actorId, "getActor");
      fetchActorMovies(actorId);
    } else if (isMovie) {
      fetchData(movieId, "getMovie");
      fetchMovieActors(movieId, movieType);
    }
        else{
          fetchData(movieId,"getTvshow")
          fetchMovieActors(movieId, movieType);
        }
  }, [movieType, actorId, movieId, onBackClick, onMovieClick, onActorClick]);

  if (!details) {
    return <div>Loading...</div>;
  }

  if (actorId){
    return (
      <div className="DetailsView">
        <button onClick={onBackClick}>Back</button>
        <h2>{details.name || details.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${details.profile_path || details.poster_path}`}
          alt={details.name || details.title}
        />
        <ul>
            {Credits.map((credit) => {
              const isIdExisting = isIdInList(credit.id);
              if(credit.poster_path != null && !isIdExisting){
                idList.push(credit.id);
                return(
                  <li key={credit.id}>
                <h3>{credit.title || credit.name}</h3>
                <button onClick={() => onMovieClick(credit.id,credit.media_type)}>
                  <img src={`https://image.tmdb.org/t/p/w500${credit.poster_path}`}
                  alt={credit.title || credit.name}/>                 
                </button>
              </li>     
                );
              }
              else{
                return null
              }
            })}
          </ul>

      </div>
    );
            }
  else if(movieId){
    return (
      <div className="DetailsView">
        <button onClick={onBackClick}>Back</button>
        <h2>{details.name || details.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${details.profile_path || details.poster_path}`}
          alt={details.name || details.title}
        />
          <ul>
            {Cast.map((actor) => {
              if(actor.profile_path!=null)
              {
                return(
                  <li key={actor.id}>
                <h3>{actor.name}</h3>
                <button onClick={() => onActorClick(actor.id)}>
                  <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}/>
                </button>
              </li>
                );
              }
              else
              {
                return null;
              }
              
            })}
        </ul>
      </div>
    );
  

  }

}

export default DetailsView;