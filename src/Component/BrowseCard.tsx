import { PropsBrowse } from "../Utils/browse";

import { BsPerson } from "react-icons/bs";

const BrowseCard = ({
  platform,
  image,
  popular_items,
  game1,
  game2,
  game3,
}: PropsBrowse) => {
  return (
    <div>
      <div className="relative w-[350px] md:w-[440px] h-[350px] rounded-lg mb-10">
        <>
          <img
            src={image}
            className="w-full h-full object-cover absolute -z-10 inset-0 rounded-lg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-transparent via-primary-100 to-primary-100 opacity-90 rounded-b-lg"></div>

          <div className="z-20 relative">
            <div className="w-fit mx-auto">
              <h1 className="text-2xl font-bold flex justify-center pt-[3em] mb-1">
                {platform}
              </h1>
              <div className="w-full h-[2px] bg-primary-400 mb-3"></div>
            </div>

            <button className="flex justify-center bg-primary-400/30 hover:bg-primary-400 hover:text-primary-100 backdrop-blur-xl py-3 px-8 w-fit h-fit mx-auto rounded-lg mb-5">
              Follow
            </button>

            <div className="px-3">
              <div className="flex justify-between mb-2">
                <p>Popular Items</p>
                <p>{popular_items}</p>
              </div>

              <div className="w-full h-[2px] bg-primary-600 mb-3"></div>

              <div className="">
                <div className="flex justify-between">
                  <p>{game1.name}</p>
                  <div className="flex w-[80px] justify-between">
                    <BsPerson className="mt-1 mr-2" />
                    <p>{game1.player}</p>
                  </div>
                </div>

                <div className="flex justify-between my-2">
                  <p>{game2.name}</p>
                  <div className="flex w-[80px] justify-between">
                    <BsPerson className="mt-1 mr-2" />
                    <p>{game2.player}</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <p>{game3.name}</p>
                  <div className="flex w-[80px] justify-between">
                    <BsPerson className="mt-1 mr-2" />
                    <p>{game3.player}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default BrowseCard;
