const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const isPerfectSquare = (n) => {
  return n > 0 && Math.sqrt(n) % 1 === 0;
};

const isFibonacci = (num) => {
  return isPerfectSquare(5 * num ** 2 + 4) || isPerfectSquare(5 * num ** 2 - 4);
};

export { isPrime, isFibonacci };
