import { useLocation } from "react-router";

const GenresDetail = () => {
  const { state } = useLocation();
  const { name, id } = state;
  return <div className="text-primary-400 text-5xl mt-[100px]">{name}</div>;
};

export default GenresDetail;
