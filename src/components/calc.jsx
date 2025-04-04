const calculate = (e) => {
  e.preventDefault(); // Prevent form submission
  console.log("Calculate button clicked");

  const invest = parseFloat(rawInvestment); // Use raw value for calculation
  setError(""); // Clear previous errors

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
      setResult(<p>Minimum investment for the 6‑month plan is Rs. {minInvestment.toLocaleString()}.</p>);
      return;
    }

    if (paymentOption === "monthly") {
      // Monthly payouts: 12% annual interest (1% per month)
      interestRate = 0.12 / 12; // Monthly interest
      monthlyPayout = invest * interestRate;
      finalAmount = invest + (monthlyPayout * 6); // Principal + total monthly payouts
      setResult(
        <>
          <p className="font-semibold">Plan: 6 Months (Monthly Payout)</p>
          <p>Monthly Payout: Rs. {monthlyPayout.toLocaleString()}</p>
          <p>Total Return after 6 Months: Rs. {finalAmount.toLocaleString()}</p>
        </>
      );
    } else if (paymentOption === "end") {
      // End of 6 months: 15% total interest
      interest = invest * 0.15;
      finalAmount = invest + interest;
      setResult(
        <>
          <p className="font-semibold">Plan: 6 Months (End of Term Payout)</p>
          <p>Total Interest: Rs. {interest.toLocaleString()}</p>
          <p>Total Return after 6 Months: Rs. {finalAmount.toLocaleString()}</p>
        </>
      );
    }
  } else if (plan === "12") {
    minInvestment = 100000;
    if (invest < minInvestment) {
      setResult(<p>Minimum investment for the 1‑year plan is Rs. {minInvestment.toLocaleString()}.</p>);
      return;
    }

    if (paymentOption === "monthly") {
      // Monthly payouts: 24% annual interest (2% per month)
      interestRate = 0.24 / 12; // Monthly interest
      monthlyPayout = invest * interestRate;
      finalAmount = invest + (monthlyPayout * 12); // Principal + total monthly payouts
      setResult(
        <>
          <p className="font-semibold">Plan: 1 Year (Monthly Payout)</p>
          <p>Monthly Payout: Rs. {monthlyPayout.toLocaleString()}</p>
          <p>Total Return after 1 Year: Rs. {finalAmount.toLocaleString()}</p>
        </>
      );
    } else if (paymentOption === "end") {
      // End of 1 year: 26% total interest
      interest = invest * 0.26;
      finalAmount = invest + interest;
      setResult(
        <>
          <p className="font-semibold">Plan: 1 Year (End of Term Payout)</p>
          <p>Total Interest: Rs. {interest.toLocaleString()}</p>
          <p>Total Return after 1 Year: Rs. {finalAmount.toLocaleString()}</p>
        </>
      );
    }
  }
};
