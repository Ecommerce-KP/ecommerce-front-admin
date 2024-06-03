import React from 'react';

type ButtonSubmitProps = {
  name: string;
  className?: string;
};

const ButtonSubmit: React.FC<ButtonSubmitProps> = ({ name, className }) => {
  return (
    <button
      type="submit"
      className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
    >
      {name}
    </button>
  );
};

export default ButtonSubmit;