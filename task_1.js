#!/usr/bin/env node

const readline = require("readline-sync");

let isAdult = readline.question("Your age: ") >= 18;

if (isAdult) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
