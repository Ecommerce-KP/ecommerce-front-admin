import React from "react";
import Spinner from "../../ui/loading/Spinner";

type SpinnerButtonType = {
  handleSubmit?: () => void;
  isLoading: boolean;
  className?: string;
  label?: string;
};

const SpinnerButton = ({
  isLoading,
  className,
  handleSubmit,
  label,
}: SpinnerButtonType) => {
  return (
    <div>
      <button
        onClick={handleSubmit}
        className={`flex items-center justify-center w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
      >
        {isLoading ? <Spinner /> : label || "Submit"}
      </button>
    </div>
  );
};

export default SpinnerButton;
