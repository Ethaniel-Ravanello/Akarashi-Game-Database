import { useState } from "react";

import Genres from "../Dummy/Genres";
import Developer from "../Dummy/Developer";
import Platform from "../Dummy/Platform";
import Publisher from "../Dummy/Publisher";
import Store from "../Dummy/Stores";
import Tags from "../Dummy/Tags";
import type { PropsBrowse } from "../Utils/browse";

import BrowseCard from "../Component/BrowseCard";
import Spinner from "../Component/Spinner";
import { IoIosArrowForward } from "react-icons/io";

const Browse = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="text-primary-400 w-[100%] h-[100%]">
        <h1 className="text-6xl font-bold mt-[120px] mb-10 pl-8">Browse</h1>

        <div className="px-5">
          <div className="w-fit  font-bold mb-5 flex cursor-pointer hover:text-primary-600">
            <h2 className="underline-offset-4 underline text-2xl pt-1.5 md:text-4xl md:pt-1">
              Genres
            </h2>
            <span className="flex font-medium text-primary-600 ml-5 no-underline pt-2 md:pt-3 text-2xl">
              19 <IoIosArrowForward className="pt-2 md:pt-1" />
            </span>
          </div>

          <div className="flex gap-x-7 justify-start overflow-x-scroll lg:overflow-x-hidden mb-2 pr-3">
            {Genres && loading === false ? (
              Genres.map((data: PropsBrowse) => (
                <BrowseCard
                  platform={data.platform}
                  popular_items={data.popular_items}
                  image={data.image}
                  game1={data.game1}
                  game2={data.game2}
                  game3={data.game3}
                />
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>

        <div className="px-5">
          <div className="w-fit  font-bold mb-5 flex cursor-pointer hover:text-primary-600">
            <h2 className="underline-offset-4 underline text-2xl pt-1.5 md:text-4xl md:pt-1">
              Developers
            </h2>
            <span className="flex font-medium text-primary-600 ml-5 no-underline pt-2 md:pt-3 text-2xl">
              435,016 <IoIosArrowForward className="pt-2 md:pt-1" />
            </span>
          </div>
          <div className="flex gap-x-7 justify-start overflow-x-scroll lg:overflow-x-hidden mb-2 pr-3">
            {Developer && loading === false ? (
              Developer.map((data: PropsBrowse) => (
                <BrowseCard
                  platform={data.platform}
                  popular_items={data.popular_items}
                  image={data.image}
                  game1={data.game1}
                  game2={data.game2}
                  game3={data.game3}
                />
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>

        <div className="px-5">
          <div className="w-fit  font-bold mb-5 flex cursor-pointer hover:text-primary-600">
            <h2 className="underline-offset-4 underline text-2xl pt-1.5 md:text-4xl md:pt-1">
              Platforms
            </h2>
            <span className="flex font-medium text-primary-600 ml-5 no-underline pt-2 md:pt-3 text-2xl">
              51 <IoIosArrowForward className="pt-2 md:pt-1" />
            </span>
          </div>
          <div className="flex gap-x-7 justify-start overflow-x-scroll lg:overflow-x-hidden mb-2 pr-3">
            {Platform && loading === false ? (
              Platform.map((data: PropsBrowse) => (
                <BrowseCard
                  platform={data.platform}
                  popular_items={data.popular_items}
                  image={data.image}
                  game1={data.game1}
                  game2={data.game2}
                  game3={data.game3}
                />
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>

        <div className="px-5">
          <div className="w-fit  font-bold mb-5 flex cursor-pointer hover:text-primary-600">
            <h2 className="underline-offset-4 underline text-2xl pt-1.5 md:text-4xl md:pt-1">
              Publishers
            </h2>
            <span className="flex font-medium text-primary-600 ml-5 no-underline pt-2 md:pt-3 text-2xl">
              63,064 <IoIosArrowForward className="pt-2 md:pt-1" />
            </span>
          </div>
          <div className="flex gap-x-7 justify-start overflow-x-scroll lg:overflow-x-hidden mb-2 pr-3">
            {Publisher && loading === false ? (
              Publisher.map((data: PropsBrowse) => (
                <BrowseCard
                  platform={data.platform}
                  popular_items={data.popular_items}
                  image={data.image}
                  game1={data.game1}
                  game2={data.game2}
                  game3={data.game3}
                />
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>

        <div className="px-5">
          <div className="w-fit  font-bold mb-5 flex cursor-pointer hover:text-primary-600">
            <h2 className="underline-offset-4 underline text-2xl pt-1.5 md:text-4xl md:pt-1">
              Stores
            </h2>
            <span className="flex font-medium text-primary-600 ml-5 no-underline pt-2 md:pt-3 text-2xl">
              10 <IoIosArrowForward className="pt-2 md:pt-1" />
            </span>
          </div>
          <div className="flex gap-x-7 justify-start overflow-x-scroll lg:overflow-x-hidden mb-2 pr-3">
            {Store && loading === false ? (
              Store.map((data: PropsBrowse) => (
                <BrowseCard
                  platform={data.platform}
                  popular_items={data.popular_items}
                  image={data.image}
                  game1={data.game1}
                  game2={data.game2}
                  game3={data.game3}
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
          <div className="flex gap-x-7 justify-start overflow-x-scroll lg:overflow-x-hidden mb-2 pr-3">
            {Tags && loading === false ? (
              Tags.map((data: PropsBrowse) => (
                <BrowseCard
                  platform={data.platform}
                  popular_items={data.popular_items}
                  image={data.image}
                  game1={data.game1}
                  game2={data.game2}
                  game3={data.game3}
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
