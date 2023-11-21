/* File: complex_code.js */

// This complex code calculates the sum of all prime numbers up to a certain limit
// It utilizes various advanced algorithms and techniques to optimize the performance

// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to calculate the sum of all prime numbers up to a given limit
function sumOfPrimes(limit) {
  let sum = 0;

  // Using the sieve of Eratosthenes algorithm to generate prime numbers
  const sieve = new Array(limit + 1).fill(true);
  sieve[0] = false;
  sieve[1] = false;

  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (sieve[i] === true) {
      for (let j = i * i; j <= limit; j += i) {
        sieve[j] = false;
      }
    }
  }

  // Calculating the sum of all prime numbers
  for (let i = 2; i <= limit; i++) {
    if (sieve[i] === true) {
      sum += i;
    }
  }

  return sum;
}

// Main execution
const limit = 1000;
const primeSum = sumOfPrimes(limit);

console.log(`The sum of all prime numbers up to ${limit} is: ${primeSum}`);
