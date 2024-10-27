#!/usr/bin/env node

let numbers = [2, 4, 6, 8, 10];

let squaredNumbers = [];
let maxValue = numbers[0];
let minValue = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  squaredNumbers.push(numbers[i] * numbers[i]);
}

// max
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < maxValue) {
    continue;
  }
  maxValue = numbers[i];
}

//min
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > minValue) {
    continue;
  }
  minValue = numbers[i];
}

console.log(squaredNumbers);
console.log(maxValue);
console.log(minValue);
