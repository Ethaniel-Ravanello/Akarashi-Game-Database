import React from "react";

const BrowseCard = () => {
  return (
    <div>
      <div className="relative w-[350px] md:w-[450px] h-[350px] rounded-lg mb-10">
        <div className="z-10">
          <img
            src="https://wallpapercave.com/wp/wp11520704.jpg"
            className="w-full h-full object-cover absolute -z-10 inset-0 rounded-lg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-transparent via-primary-100 to-primary-100 opacity-90 rounded-b-lg"></div>

          <div className="w-full h-full z-20 relative">
            <div className="w-fit mx-auto">
              <h1 className="text-4xl font-bold flex justify-center pt-20 mb-1">
                PC
              </h1>
              <div className="w-full h-[2px] bg-primary-400 mb-3"></div>
            </div>
            <button className="flex justify-center bg-primary-400/30 backdrop-blur-xl py-3 px-8 w-fit h-fit mx-auto rounded-lg mb-5">
              Follow
            </button>

            <div className="w-full px-3">
              <div className="flex justify-between mb-2">
                <p>Popular Items</p>
                <p>123,456</p>
              </div>

              <div className="w-full h-[2px] bg-primary-600 mb-3"></div>

              <div className="">
                <p>Grand Theft Auto</p>
                <p className="my-2">Portal 2</p>
                <p>DOOM Eternal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseCard;
