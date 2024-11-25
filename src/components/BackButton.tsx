import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)} 
      className="pr-4 py-2 text-white hover:scale-105 transition"
    >
      <span className="mr-2 text-lg">{"<"}</span>Back
    </button>
  );
};

export default BackButton;
