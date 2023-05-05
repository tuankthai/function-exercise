// Easy

// Write a function that takes in an array of numbers and returns the largest number in the array.
function findLargestNumber(numbers) {
  // Your code here
}

const numberArr = [5, 1, 9, 3, 7];

// console.log(findLargestNumber(numberArr)); // Output: 9


// Write a function that takes in a string and returns the number of vowels in the string.
function countVowels(str) {
  // Your code here
  let vowelCnt = 0
  const vowels = ["a", "e", "i", "o", "u",]
  for (letter of str) {
    if (vowels.includes(letter) ) vowelCnt++
  }
  return vowelCnt
}

const str1 = 'Hello world';

console.log(countVowels(str1)); // Output: 3


// Write a function that takes in an object and a key, and returns the value of that key in the object.
function getValueByKey(obj, key) {
  // Your code here
  
  return obj[key]
}

const person = {
    name: 'John',
    age: 32,
    job: 'Software Engineer'
  };
  
console.log(getValueByKey(person, 'age')); // Output: 32
console.log(getValueByKey(person, 'name')); // Output: 32
console.log(getValueByKey(person, 'job')); // Output: 32
  