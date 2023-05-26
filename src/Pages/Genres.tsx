import { useState, useEffect } from "react";
import axios from "axios";

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);

  const getGenres = () => {
    setLoading(true);
    axios
      .get(
        `https://api.rawg.io/api/genres?key=3d27cad6bbee4c88bbdbe0f255aad396`
      )
      .then((res) => {
        setGenres(res.data.results);
        console.log(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <div className="w-full h-full mt-[100px] px-10">
      <div className="text-primary-400">
        <h1 className="text-7xl font-semibold">Genres</h1>
      </div>
    </div>
  );
};

export default Genres;
