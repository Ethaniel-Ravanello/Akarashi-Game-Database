import Rolling from "/Rolling.svg";

const Spinner = () => {
  return (
    <div className="w-[100px] h-[100px] mx-auto animate-spin bg-primary-100">
      <img src={Rolling} className="bg-primary-100" alt="" />
    </div>
  );
};

export default Spinner;
