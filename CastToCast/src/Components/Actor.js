import axios from 'axios';

const getActorDetails = async (actorId) => {
  try {
    const response = await axios.get(`http://localhost:3001/getActorDetails/${actorId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching actor details:', error);
  }
};
