#!/usr/bin/env node

let a = 7;
let b = 81;
let c = 42;

let numbers = [a, b, c];
let result = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < result[result.length - 1]) {
    let tmp = result.pop();
    result.push(numbers[i]);
    result.push(tmp);
    continue;
  }
  result.push(numbers[i]);
}

console.log(result);
