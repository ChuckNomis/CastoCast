const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

app.use(express.json()); // Handle JSON requests
app.use(cors()); // Allow requests from all origins








app.get('/api/getTopActors/:page', async (req, res) => {
  try {
    const apiKey = "a3d7cc20442b9124e3ef7d9d2f45a2f9";
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}`
    );
    const topActorsList = response.data.results;
    res.json(topActorsList);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 3001; // Use the port of your choice
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
