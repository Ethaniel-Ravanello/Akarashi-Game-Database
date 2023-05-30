import { useLocation } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";

const GamesDetail = () => {
  const [games, setGames] = useState([]);
  const [screenshots, setScreenshots] = useState([]);
  const [trailer, setTrailer] = useState([]);

  const { state } = useLocation();
  const { name, id, slug } = state;

  const fetchData = () => {
    const gameRequest = axios.get(
      `https://api.rawg.io/api/games/${id}?key=3d27cad6bbee4c88bbdbe0f255aad396`
    );
    const trailerRequest = axios.get(
      `https://api.rawg.io/api/games/${id}/movies?key=3d27cad6bbee4c88bbdbe0f255aad396`
    );

    axios
      .all([gameRequest, trailerRequest])
      .then(
        axios.spread((gameRes, trailerRes) => {
          setGames(gameRes.data);
          setTrailer(trailerRes.data.results);
          console.log(gameRes.data);
          console.log(trailerRes.data.results);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full h-full mt-[100px] text-primary-400">
      <div className="w-full h-[100vh] relative">
        <img
          className="w-full h-full object-cover opacity-60"
          src={games.background_image}
          alt="Background Image"
        />
        <div className="absolute bottom-0 bg-gradient-to-b from-primary-transparent via-primary-100 to-primary-100 opacity-100 rounded-b-lg h-[80vh] w-full"></div>
      </div>
      <div>uahushduhasuduh</div>
    </div>
  );
};

export default GamesDetail;
