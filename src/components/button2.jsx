import React from "react";

const Button2 = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-green-400 rounded-[10px] outline-none flex items-center justify-center mx-auto sm:mx-0 ${styles}`}
    onClick={() => {
      const link = document.createElement('a');
      link.href = './Thisal_PHP.pdf';  // The file path
      link.download = './Thisal_PHP.pdf';  // Optional: Specify the filename for the download
      link.click();
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
    </svg>
    Download PDF
  </button>
);

export default Button2;
