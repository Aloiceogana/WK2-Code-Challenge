// This function takes an array `arr` as input
function showPrimes(arr) {
  // contains only the elements that satisfy the `isPrime` 
  return arr.filter(isPrime);
}

// This function checks if a given number `num` is prime or not
function isPrime(num) {
  // If the number is less than 2, it's not prime 
  if (num < 2) return false;
  // We start the loop from 2 because we've already checked for numbers less than 2
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // If the number is divisible by `i` without a remainder (`num % i === 0`),
    // it means `i` is a factor of `num`, and therefore `num` is not prime
    if (num % i === 0) return false;
  }
  // If the loop completes without finding a factor,
  // and the number is greater than 1,
  // then the number is prime
  return num > 1;
}

// Created an input array of numbers
const inputArray = [11, 12, 13, 14, 15, 16, 17, 18, 19];
const primeArray = showPrimes(inputArray);
// output
console.log(primeArray);