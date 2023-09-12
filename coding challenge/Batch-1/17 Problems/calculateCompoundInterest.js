let calculateInterest = (principle, rate, time, n) => principle * (Math.pow((1 + (rate / n)), (n * time)));
  
  console.log(calculateInterest(20000,5,2,2))
  console.log(calculateInterest(150000,25,1,2))