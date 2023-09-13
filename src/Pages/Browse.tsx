import { useState } from "react";
import { useNavigate } from "react-router";

import Genres from "../Dummy/Genres";
import Developer from "../Dummy/Developer";
import Platform from "../Dummy/Platform";
import Publisher from "../Dummy/Publisher";
import Store from "../Dummy/Stores";
import Tags from "../Dummy/Tags";
import type { PropsBrowse } from "../Utils/browse";

import GameCard from "../Component/GameCard";
import Spinner from "../Component/Spinner";
import { IoIosArrowForward } from "react-icons/io";

const Browse = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="text-primary-400 w-[100%] h-[100%]">
        <h1 className="text-6xl font-bold mt-[120px] mb-10 pl-8">Browse</h1>

        <div className="px-5">
          <div
            onClick={() => navigate("/genres")}
            className="w-fit  font-bold mb-5 flex cursor-pointer hover:text-primary-600"
          >
            <h2 className="underline-offset-4 underline text-2xl pt-1.5 md:text-4xl md:pt-1">
              Genres
            </h2>
            <span className="flex font-medium text-primary-600 ml-5 no-underline pt-2 md:pt-3 text-2xl">
              19 <IoIosArrowForward className="pt-2 md:pt-1" />
            </span>
          </div>

          <div className="flex gap-x-7 justify-start overflow-x-scroll 2xl:overflow-x-hidden mb-2 pr-3">
            {Genres && loading === false ? (
              Genres.map((data: PropsBrowse) => (
                <GameCard
                  key={data.id}
                  platform={data.platform}
                  popular_items={data.popular_items}
                  image={data.image}
                  games={data.games}
                  id={data.id}
                  onClick={() => {
                    navigate(`/genres/${data.platform}`, {
                      state: {
                        id: data.id,
                        name: data.platform,
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

        <div className="px-5">
          <div
            onClick={() => navigate("/developers")}
            className="w-fit  font-bold mb-5 flex cursor-pointer hover:text-primary-600"
          >
            <h2 className="underline-offset-4 underline text-2xl pt-1.5 md:text-4xl md:pt-1">
              Developers
            </h2>
            <span className="flex font-medium text-primary-600 ml-5 no-underline pt-2 md:pt-3 text-2xl">
              435,016 <IoIosArrowForward className="pt-2 md:pt-1" />
            </span>
          </div>
          <div className="flex gap-x-7 justify-start overflow-x-scroll 2xl:overflow-x-hidden mb-2 pr-3">
            {Developer && loading === false ? (
              Developer.map((data: PropsBrowse) => (
                <GameCard
                  key={data.id}
                  platform={data.platform}
                  popular_items={data.popular_items}
                  image={data.image}
                  games={data.games}
                  id={data.id}
                  onClick={() => {
                    navigate(`/developers/${data.platform}`, {
                      state: {
                        id: data.id,
                        name: data.platform,
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

        <div className="px-5">
          <div
            onClick={() => navigate("/platforms")}
            className="w-fit  font-bold mb-5 flex cursor-pointer hover:text-primary-600"
          >
            <h2 className="underline-offset-4 underline text-2xl pt-1.5 md:text-4xl md:pt-1">
              Platforms
            </h2>
            <span className="flex font-medium text-primary-600 ml-5 no-underline pt-2 md:pt-3 text-2xl">
              51 <IoIosArrowForward className="pt-2 md:pt-1" />
            </span>
          </div>
          <div className="flex gap-x-7 justify-start overflow-x-scroll 2xl:overflow-x-hidden mb-2 pr-3">
            {Platform && loading === false ? (
              Platform.map((data: PropsBrowse) => (
                <GameCard
                  key={data.id}
                  platform={data.platform}
                  popular_items={data.popular_items}
                  image={data.image}
                  games={data.games}
                  id={data.id}
                  onClick={() => {
                    navigate(`/platforms/${data.platform}`, {
                      state: {
                        id: data.id,
                        name: data.platform,
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

        <div className="px-5">
          <div
            onClick={() => navigate("/publishers")}
            className="w-fit  font-bold mb-5 flex cursor-pointer hover:text-primary-600"
          >
            <h2 className="underline-offset-4 underline text-2xl pt-1.5 md:text-4xl md:pt-1">
              Publishers
            </h2>
            <span className="flex font-medium text-primary-600 ml-5 no-underline pt-2 md:pt-3 text-2xl">
              63,064 <IoIosArrowForward className="pt-2 md:pt-1" />
            </span>
          </div>
          <div className="flex gap-x-7 justify-start overflow-x-scroll 2xl:overflow-x-hidden mb-2 pr-3">
            {Publisher && loading === false ? (
              Publisher.map((data: PropsBrowse) => (
                <GameCard
                  key={data.id}
                  platform={data.platform}
                  popular_items={data.popular_items}
                  image={data.image}
                  games={data.games}
                  id={data.id}
                  onClick={() => {
                    navigate(`/publishers/${data.platform}`, {
                      state: {
                        id: data.id,
                        name: data.platform,
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

        <div className="px-5">
          <div
            onClick={() => navigate("/stores")}
            className="w-fit  font-bold mb-5 flex cursor-pointer hover:text-primary-600"
          >
            <h2 className="underline-offset-4 underline text-2xl pt-1.5 md:text-4xl md:pt-1">
              Stores
            </h2>
            <span className="flex font-medium text-primary-600 ml-5 no-underline pt-2 md:pt-3 text-2xl">
              10 <IoIosArrowForward className="pt-2 md:pt-1" />
            </span>
          </div>
          <div className="flex gap-x-7 justify-start overflow-x-scroll 2xl:overflow-x-hidden mb-2 pr-3">
            {Store && loading === false ? (
              Store.map((data: PropsBrowse) => (
                <GameCard
                  key={data.id}
                  platform={data.platform}
                  popular_items={data.popular_items}
                  image={data.image}
                  games={data.games}
                  id={data.id}
                  onClick={() => {
                    navigate(`/stores/${data.platform}`, {
                      state: {
                        id: data.id,
                        name: data.platform,
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

        <div className="px-5">
          <div className="w-fit font-bold mb-5 flex cursor-pointer hover:text-primary-600">
            <h2 className="underline-offset-4 underline text-2xl pt-1.5 md:text-4xl md:pt-1">
              Tags
            </h2>
            <span className="flex font-medium text-primary-600 ml-5 no-underline pt-2 md:pt-3 text-2xl">
              10,087 <IoIosArrowForward className="pt-2 md:pt-1" />
            </span>
          </div>
          <div className="flex gap-x-7 justify-start overflow-x-scroll 2xl:overflow-x-hidden mb-2 pr-3">
            {Tags && loading === false ? (
              Tags.map((data: PropsBrowse) => (
                <GameCard
                  key={data.id}
                  platform={data.platform}
                  popular_items={data.popular_items}
                  image={data.image}
                  games={data.games}
                  id={data.id}
                  onClick={() => {
                    navigate(`/tags/${data.platform}`, {
                      state: {
                        id: data.id,
                        name: data.platform,
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
    </>
  );
};

export default Browse;
