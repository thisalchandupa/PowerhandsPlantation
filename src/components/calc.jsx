import React, { useState, useEffect } from "react";

const InvestmentCalculator = ({ closeModal }) => {
  const [rawInvestment, setRawInvestment] = useState("");
  const [paymentOption, setPaymentOption] = useState("monthly");
  const [plan, setPlan] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // Disable scrolling while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Auto-format input with commas as the user types
  const handleInvestmentChange = (e) => {
    const valueWithoutCommas = e.target.value.replace(/,/g, "");
    if (valueWithoutCommas === "") {
      setRawInvestment("");
      return;
    }
    const numberValue = parseFloat(valueWithoutCommas);
    if (!isNaN(numberValue)) {
      setRawInvestment(numberValue.toLocaleString());
    } else {
      setRawInvestment(valueWithoutCommas);
    }
  };

  const calculate = (e) => {
    e.preventDefault();
    console.log("Calculate button clicked");

    // Remove commas for calculation
    const invest = parseFloat(rawInvestment.replace(/,/g, ""));
    setError("");

    if (!plan) {
      setResult(<p>Please select a plan.</p>);
      return;
    }
    if (isNaN(invest) || invest <= 0) {
      setError("Please enter a valid positive investment amount.");
      return;
    }

    let finalAmount, minInvestment, interestRate, monthlyPayout, interest;
    if (plan === "6") {
      minInvestment = 1000000;
      if (invest < minInvestment) {
        setResult(
          <p>
            Minimum investment for the 6‑month plan is Rs.{" "}
            {minInvestment.toLocaleString()}.
          </p>
        );
        return;
      }
      if (paymentOption === "monthly") {
        interestRate = 0.12 / 12;
        monthlyPayout = invest * interestRate;
        finalAmount = invest + monthlyPayout * 6;
        setResult(
          <>
            <p className="font-semibold">
              Plan: 6 Months (Monthly Payout)
            </p>
            <p>Monthly Payout: Rs. {monthlyPayout.toLocaleString()}</p>
            <p>
              Total Return after 6 Months: Rs. {finalAmount.toLocaleString()}
            </p>
          </>
        );
      } else if (paymentOption === "end") {
        interest = invest * 0.15;
        finalAmount = invest + interest;
        setResult(
          <>
            <p className="font-semibold">
              Plan: 6 Months (End of Term Payout)
            </p>
            <p>Total Interest: Rs. {interest.toLocaleString()}</p>
            <p>
              Total Return after 6 Months: Rs. {finalAmount.toLocaleString()}
            </p>
          </>
        );
      }
    } else if (plan === "12") {
      minInvestment = 100000;
      if (invest < minInvestment) {
        setResult(
          <p>
            Minimum investment for the 1‑year plan is Rs.{" "}
            {minInvestment.toLocaleString()}.
          </p>
        );
        return;
      }
      if (paymentOption === "monthly") {
        interestRate = 0.24 / 12;
        monthlyPayout = invest * interestRate;
        finalAmount = invest + monthlyPayout * 12;
        setResult(
          <>
            <p className="font-semibold">
              Plan: 1 Year (Monthly Payout)
            </p>
            <p>Monthly Payout: Rs. {monthlyPayout.toLocaleString()}</p>
            <p>
              Total Return after 1 Year: Rs. {finalAmount.toLocaleString()}
            </p>
          </>
        );
      } else if (paymentOption === "end") {
        interest = invest * 0.26;
        finalAmount = invest + interest;
        setResult(
          <>
            <p className="font-semibold">
              Plan: 1 Year (End of Term Payout)
            </p>
            <p>Total Interest: Rs. {interest.toLocaleString()}</p>
            <p>
              Total Return after 1 Year: Rs. {finalAmount.toLocaleString()}
            </p>
          </>
        );
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative bg-gray-800 p-6 rounded-lg shadow-2xl max-w-md w-full transform transition-all duration-300">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-white transition"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-white">
          Investment Calculator
        </h2>
        <form onSubmit={calculate}>
          <div className="mb-4">
            <label className="block mb-1 text-gray-300" htmlFor="investment">
              Investment Amount (Rs.)
            </label>
            <input
              id="investment"
              type="text"
              value={rawInvestment}
              onChange={handleInvestmentChange}
              className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter amount"
              required
            />
          </div>

          {/* Plan Selection as Radio Buttons */}
          <div className="mb-4">
            <p className="mb-2 text-gray-300">Select Plan:</p>
            <div className="flex items-center space-x-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="plan"
                  value="6"
                  checked={plan === "6"}
                  onChange={(e) => setPlan(e.target.value)}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-300">6 Months</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="plan"
                  value="12"
                  checked={plan === "12"}
                  onChange={(e) => setPlan(e.target.value)}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-300">1 Year</span>
              </label>
            </div>
          </div>

          {/* Payment Option Selection as Radio Buttons */}
          <div className="mb-4">
            <p className="mb-2 text-gray-300">Payment Option:</p>
            <div className="flex items-center space-x-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="paymentOption"
                  value="monthly"
                  checked={paymentOption === "monthly"}
                  onChange={(e) => setPaymentOption(e.target.value)}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-300">Monthly Payout</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="paymentOption"
                  value="end"
                  checked={paymentOption === "end"}
                  onChange={(e) => setPaymentOption(e.target.value)}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-300">
                  End of Term Payout
                </span>
              </label>
            </div>
          </div>

          {error && <p className="text-red-400 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition"
          >
            Calculate
          </button>
        </form>
        {result && (
          <div className="mt-6 p-4 bg-gray-700 rounded text-white">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestmentCalculator;
