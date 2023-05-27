import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import GameCard from "../Component/GameCard";
import Spinner from "../Component/Spinner";
const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

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
        <h1 className="text-7xl font-semibold mb-5">Genres</h1>
        <div className="flex justify-around flex-wrap">
          {genres && loading === false ? (
            genres.map((data: any) => (
              <GameCard
                platform={data.name}
                image={data.image_background}
                popular_items={data.games_count}
                id={data.id}
                games={data.games}
                key={data.id}
                onClick={() => {
                  navigate(`/genres/${data.slug}`, {
                    state: {
                      id: data.id,
                      name: data.name,
                    },
                  });
                }}
              />
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
};

export default Genres;
