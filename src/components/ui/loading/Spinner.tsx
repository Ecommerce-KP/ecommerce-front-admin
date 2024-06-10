import React from "react";

const Spinner = ({ className }: { className?: string }) => {
  return (
    <div
      className={`w-[24px] h-[24px] border-[4px] border-t-[4px] border-t-transparent border-[#f6f6f6] animate-spin rounded-full`}
    ></div>
  );
};

export default Spinner;
