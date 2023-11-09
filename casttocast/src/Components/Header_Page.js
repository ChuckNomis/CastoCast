import React, { useState, useEffect } from "react";
import axios from "axios";
import { topActors } from "./TopActors";

function Header_Page() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchTopActors();
  }, []);

  const fetchTopActors = async () => {
    try {
      const apiKey = "a3d7cc20442b9124e3ef7d9d2f45a2f9"; // Replace with your TMDb API key
      const totalPages = 5; // You can adjust this number to get more or fewer actors

      let topActors = [];

      for (let page = 1; page <= totalPages; page++) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&page=${page}`
        );
        const actorsOnPage = response.data.results;
        topActors = [...topActors, ...actorsOnPage];
      }

      setActors(topActors);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
}
export default Header_Page;
