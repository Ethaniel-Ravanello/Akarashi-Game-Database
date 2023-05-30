import { useLocation } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";

const GamesDetail = () => {
  const [games, setGames] = useState({
    background_image: "",
    name: "",
    ratings: [],
    ratings_count: 0,
    metacritic: "",
    achievements_count: 0,
    image: "",
    description: "",
    platforms: [],
    genres: [],
    released: "",
    developers: [],
  });
  const [screenshots, setScreenshots] = useState([
    {
      image: "",
    },
  ]);
  const [trailer, setTrailer] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const { state } = useLocation();
  const { id } = state;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const fetchData = () => {
    const gameRequest = axios.get(
      `https://api.rawg.io/api/games/${id}?key=3d27cad6bbee4c88bbdbe0f255aad396`
    );
    const trailerRequest = axios.get(
      `https://api.rawg.io/api/games/${id}/movies?key=3d27cad6bbee4c88bbdbe0f255aad396`
    );
    const shotsRequest = axios.get(
      `https://api.rawg.io/api/games/${id}/screenshots?key=3d27cad6bbee4c88bbdbe0f255aad396`
    );

    axios
      .all([gameRequest, trailerRequest, shotsRequest])
      .then(
        axios.spread((gameRes, trailerRes, shotsRequest) => {
          setGames(gameRes.data);
          setTrailer(trailerRes.data.results);
          setScreenshots(shotsRequest.data.results);
          console.log(gameRes.data);
          console.log(trailerRes.data.results);
          console.log(shotsRequest.data.results);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(games);
  return (
    <div className="w-full h-full mt-[100px] text-primary-400">
      <div className="w-full h-[100vh] absolute">
        <img
          className="w-full h-full object-cover opacity-30"
          src={games.background_image}
          alt="Background Image"
        />
        <div className="absolute bottom-0 bg-gradient-to-b from-primary-transparent via-primary-100 to-primary-100 opacity-100 rounded-b-lg h-[80vh] w-full"></div>
      </div>

      <div className="w-full h-full lg:px-[100px] lg:pt-[100px] relative z-10">
        <div className="flex justify-between">
          <div className="w-[60%]">
            <p className="text-primary-600">
              <span className="hover:text-primary-400">HOME</span> /
              <span className="hover:text-primary-400 mx-2">GAMES</span> /
              {games.name?.toUpperCase()}
            </p>

            <h1 className="text-5xl font-bold mb-10">{games.name}</h1>

            {games.ratings?.slice(0, 1).map((data: any) => (
              <p className="text-3xl font-semibold mb-10">
                {data.title?.toUpperCase()}
              </p>
            ))}

            <div className="flex">
              <p className="text-xl">
                Ratings <br />
                {games.ratings_count}
              </p>
              <div className="h-[60px] w-[2px] bg-primary-400 mx-10"></div>
              <p className="text-xl">
                Metascore: <br />
                {games.metacritic}
              </p>
              <div className="h-[60px] w-[2px] bg-primary-400 mx-10"></div>
              <p className="text-xl">
                Total Achivement: <br />
                {games.achievements_count}
              </p>
              <div className="h-[60px] w-[2px] bg-primary-400 mx-10"></div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mt-[5em]">About</h2>
              <div className="pr-10">
                {showFullDescription ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: games.description }}
                  />
                ) : (
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        games.description.length > 100
                          ? games.description.slice(0, 500) + "..."
                          : games.description,
                    }}
                  />
                )}
              </div>

              <p
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-primary-200 bg-primary-400 hover:bg-primary-300 w-fit h-fit rounded-sm mt-3 px-1 cursor-pointer"
              >
                {showFullDescription ? "See less" : "See more"}
              </p>
            </div>

            <div className="grid grid-cols-2 text-primary-400 mt-16">
              <div>
                <p className="font-bold text-primary-300">Platforms</p>
                <div className="flex flex-wrap gap-x-2">
                  {games.platforms?.map((data: any) => (
                    <p className="w-fit underline underline-offset-4">
                      {data.platform.name},{" "}
                    </p>
                  ))}
                </div>
              </div>

              <div className="ml-10">
                <p className="font-bold text-primary-300">Genres</p>
                <div className="flex flex-wrap gap-x-2">
                  {games.genres?.map((data: any) => (
                    <p className="w-fit underline underline-offset-4">
                      {data.name},
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="font-bold text-primary-300">Released Date</p>
                <p>{games.released}</p>
              </div>

              <div className="ml-10 mt-10">
                <p className="font-bold text-primary-300">Developer</p>
                <div className="flex flex-wrap gap-x-2">
                  {games.developers?.map((data: any) => (
                    <p className="w-fit underline underline-offset-4">
                      {data.name},
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="h-fit w-[40%]">
            <h2>Screenshots</h2>
            <div className="flex justify-center flex-wrap">
              {screenshots.map((data) => (
                <img
                  src={data.image}
                  className="w-[200px] h-[100px] object-cover rounded-lg m-2"
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesDetail;
