const monthlyPaymentFormula = (totalLoan, years, interestRate) => {
  interestRate = interestRate / 100 / 12;
  years = years * 12;
  return (
    (totalLoan * interestRate * Math.pow(1 + interestRate, years)) /
    (Math.pow(1 + interestRate, years) - 1)
  ).toFixed(2);
};

module.exports = {
  monthlyPaymentFormula,
};
