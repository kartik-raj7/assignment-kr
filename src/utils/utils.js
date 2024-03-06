function changeToInr(amountInUsd) {
    const currentRate = 82.81;
    const convertedAmountInInr = amountInUsd * currentRate;
    const formattedAmountInInr = convertedAmountInInr.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
    });
    return `${formattedAmountInInr}`;
  }
  export {changeToInr}