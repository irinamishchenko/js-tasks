// Remove String Spaces

function noSpace(x) {
  return x.replaceAll(" ", "");
}

// Remove First and Last Character

function removeChar(str) {
  return str.slice(1, str.length - 1);
}

// MakeUpperCase

function makeUpperCase(str) {
  return str.toUpperCase();
}

// Find Maximum and Minimum Values of a List

function min(list) {
  return Math.min(...list);
}

function max(list) {
  return Math.max(...list);
}

// Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }
  let positiveCount = 0;
  let negativeSum = 0;
  for (let i = 0; i < input.length; i++) {
    input[i] > 0 ? (positiveCount += 1) : (negativeSum += input[i]);
  }
  return [positiveCount, negativeSum];
}

// Multiplying arrays values

function grow(x) {
  return x.reduce((a, b) => a * b);
}

// Removing Elements

function removeEveryOther(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i = i + 2) {
    result.push(arr[i]);
  }
  return result;
}

// Calculate average

function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((a, b) => a + b) / array.length;
}
