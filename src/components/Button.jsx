import React from "react";

const Button = ({ styles, onClick, children }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-blue-500 rounded-[10px] hover:bg-blue-600 transition ${styles}`}
    onClick={onClick} // Allow the button to trigger functions
  >
    {children || "Get Started"} {/* Default text if no children */}
  </button>
);

export default Button;
