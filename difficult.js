// Difficult

// Write a function that takes in an array of numbers and returns the average of the numbers.
function getAverage(numbers) {
  // Your code here
  let total = numbers.reduce((accu, curr) => accu + curr, 0)
  return total / numbers.length
  
}

const numberArr2 = [1, 2, 3, 4, 5];

console.log(getAverage(numberArr2)); // Output: 3


// Write a function that takes in an array of objects representing books, and returns a new array with only the books that have more than 500 pages.
function getLongBooks(books) {
  // Your code here
  return books.filter(item => item.pages > 500 )
}

const books = [
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', pages: 1178 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281 },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', pages: 277 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', pages: 432 }
  ];
  
console.log(getLongBooks(books)); // Output: [{ title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', pages: 1178 }]
  

// Write a function that takes in an array of objects representing products, and returns the total cost of all the products.
function getTotalCost(products) {
  // Your code here
  return products.reduce((accu, product) => accu + product.price, 0);
}

const products = [
    { name: 'iPhone', price: 1000 },
    { name: 'Macbook', price: 2000 },
    { name: 'iPad', price: 500 },
    { name: 'Apple Watch', price: 400 }
  ];
  
  console.log(getTotalCost(products)); // Output: 3900
  