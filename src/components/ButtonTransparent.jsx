import React from "react";

const ButtonTransparent = ({ text }) => {
  return (
    <button className="relative group overflow-hidden text-white px-6 py-3 rounded-lg transition-all duration-300 inline-block text-center">
      {/* Default Text */}
      <span className="font-bold absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
        {text}
      </span>
      {/* Hover Text */}
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
        {text}
      </span>
    </button>
  );
};

export default ButtonTransparent;