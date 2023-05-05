// Medium

// Write a function that takes in an array of numbers and returns a new array with only the even numbers.
function getEvenNumbers(numbers) {
  // Your code here
  return numbers.filter(item => item % 2 === 0)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(getEvenNumbers(numbers)); // Output: [2, 4, 6, 8, 10]


// Write a function that takes in a string and returns a new string with the first letter of each word capitalized.
function capitalizeFirstLetter(str) {
  // Your code here
  let i = 0
  const words = str.split(' ');
  console.table(words)
  for ( word of        words) {
    
    console.log(word)
    word = word.replace(word[0], word[0].toUpperCase())
    words[i++] = word;
    
    console.log(word)
  }
  console.log("\nafter converting\n")
  console.table(words)

  let result = words.join(' ');
  console.log(result)

}

const str = 'the quick brown fox jumps over the lazy dog';

console.log(capitalizeFirstLetter(str)); // Output: 'The Quick Brown Fox Jumps Over The Lazy Dog'


// Write a function that takes in an array of objects representing people, and returns a new array with only the people who are over 30 years old.
function getPeopleOver30(people) {
  // Your code here
  // let overThiry = []
  // for (person of people) {
  //   if (person['age'] > 30)
  //     overThiry.push(person)
  //     console.log(person)
  // }
  // console.table(overThiry)
  return people.filter(item => item.age >30
  ) 
}

const people = [
    { name: 'John', age: 32 },
    { name: 'Mary', age: 25 },
    { name: 'David', age: 42 },
    { name: 'Sarah', age: 28 }
  ];
  
console.log(getPeopleOver30(people)); // Output: [{ name: 'John', age: 32 }, { name: 'David', age: 42 }]
