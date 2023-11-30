const fetchMovieActors = async (movieId, movieType) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/getActorsByMovie/${movieId}/${movieType}`);
      console.log(response.data);
      const fetchedCast = response.data;
      const sortedCast = fetchedCast.sort((a,b) => b.popularity - a.popularity);
      setCast(sortedCast);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };