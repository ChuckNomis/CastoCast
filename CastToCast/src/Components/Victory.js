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
