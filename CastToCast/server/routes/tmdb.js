const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/getActorDetails/:actorId', async (req, res) => {
  try {
    const apiKey = 'a3d7cc20442b9124e3ef7d9d2f45a2f9';
    const actorId = req.params.actorId;
    const response = await axios.get(`https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}`);
    const actorDetails = response.data;
    res.json(actorDetails);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/getTopActors/:page', async (req, res) => {
    try {
      const apiKey = 'a3d7cc20442b9124e3ef7d9d2f45a2f9';
      const page = req.params.page;
      const response = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&page=${page}`);
      const topActorsList = response.data;
      res.json(topActorsList);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;
