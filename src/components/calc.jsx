import React, { useState, useEffect } from "react";

const InvestmentCalculator = ({ closeModal }) => {
  const [investment, setInvestment] = useState("");
  const [plan, setPlan] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // Disable scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling when modal is closed
    };
  }, []);

  const calculate = () => {
    const invest = parseFloat(investment);
    setError(""); // Clear previous errors

    if (!plan) {
      setResult(<p>Please select a plan.</p>);
      return;
    }
    if (isNaN(invest) || invest <= 0) {
      setError("Please enter a valid positive investment amount.");
      return;
    }

    let finalAmount, minInvestment;
    if (plan === "6") {
      minInvestment = 1000000;
      if (invest < minInvestment) {
        setResult(<p>Minimum investment for the 6‑month plan is Rs. {minInvestment.toLocaleString()}.</p>);
        return;
      }
      const interest = invest * 0.12;
      const monthlyPayout = interest / 6;
      finalAmount = invest + interest;
      setResult(
        <>
          <p className="font-semibold">Plan: 6 Months</p>
          <p>Monthly Payout: Rs. {monthlyPayout.toFixed(2)}</p>
          <p>Total Return after 6 Months: Rs. {finalAmount.toFixed(2)}</p>
        </>
      );
    } else if (plan === "12") {
      minInvestment = 100000;
      if (invest < minInvestment) {
        setResult(<p>Minimum investment for the 1‑year plan is Rs. {minInvestment.toLocaleString()}.</p>);
        return;
      }
      const interest = invest * 0.15;
      finalAmount = invest + interest;
      setResult(
        <>
          <p className="font-semibold">Plan: 1 Year</p>
          <p>Total Interest: Rs. {interest.toFixed(2)}</p>
          <p>Total Return after 1 Year: Rs. {finalAmount.toFixed(2)}</p>
        </>
      );
    }
  };

  const handleInvestmentChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setInvestment(value); // Allow only non-negative numbers
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-gray-800 rounded-lg shadow-lg w-11/12 max-w-md p-6 relative">
        {/* Close Button */}
        <button onClick={closeModal} className="absolute top-2 right-2 text-gray-400 hover:text-white">
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4 text-white">Investment Gains Calculator</h2>

        {/* Investment Amount Input */}
        <div className="mb-4">
          <label htmlFor="investment" className="block text-gray-300">
            Investment Amount (Rs):
          </label>
          <input
            type="number"
            id="investment"
            placeholder="Enter amount"
            value={investment}
            onChange={handleInvestmentChange}
            className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-700 text-white"
            style={{ 
              // Remove the up and down arrows from the number input
              '-moz-appearance': 'textfield',
              'webkit-appearance': 'none',
              'appearance': 'none'
            }}
            min="0" // Ensures no negative numbers can be entered via UI
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        {/* Plan Selection */}
        <div className="mb-4">
          <span className="block text-gray-300 mb-2">Select Plan:</span>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="plan6"
              name="plan"
              value="6"
              checked={plan === "6"}
              onChange={(e) => setPlan(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="plan6" className="text-gray-300">
              6 Months (min Rs. 1,000,000)
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="plan12"
              name="plan"
              value="12"
              checked={plan === "12"}
              onChange={(e) => setPlan(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="plan12" className="text-gray-300">
              1 Year (min Rs. 100,000)
            </label>
          </div>
        </div>

        {/* Calculate Button */}
        <button onClick={calculate} className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
          Calculate
        </button>

        {/* Display Result */}
        <div id="result" className="mt-4 text-lg font-medium text-gray-300">
          {result}
        </div>
      </div>
    </div>
  );
};

export default InvestmentCalculator;
