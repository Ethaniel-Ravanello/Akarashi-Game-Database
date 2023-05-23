import BrowseCard from "../Component/BrowseCard";

const Browse = () => {
  return (
    <>
      <div className="text-primary-400 w-[100%] h-[100%] pl-8">
        <h1 className="text-4xl font-bold mt-[120px] mb-10">Browse</h1>
        <div className="flex gap-x-5 justify-around flex-wrap mb-2">
          <BrowseCard />
          <BrowseCard />
          <BrowseCard />
          <BrowseCard />
        </div>
      </div>
    </>
  );
};

export default Browse;
