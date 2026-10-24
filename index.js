```javascript
// Find the sum of an array using reduce()

const numbers = [10, 20, 30, 40, 50];

// Use reduce() to find the sum of the array.
let sum = 0;

sum = numbers.reduce((total, number) => {
    return total + number;
}, 0);

// Do not modify this line
module.exports = sum;
```
