import React from "react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  to?: string; // Optional link to navigate to
}

const BackButton: React.FC<BackButtonProps> = ({ to }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (to) {
      navigate(to); // Navigate to the provided link
    } else {
      navigate(-1); // Default back navigation
    }
  };

  return (
    <button
      onClick={handleBack}
      className="pr-4 py-2 text-white hover:scale-105 transition"
    >
      <span className="mr-2 text-lg">{"<"}</span>Back
    </button>
  );
};

export default BackButton;
