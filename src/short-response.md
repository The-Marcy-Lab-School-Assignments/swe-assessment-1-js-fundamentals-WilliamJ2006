# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1
The name of the error is a `ReferenceError`.

You can't console.log the currentStatus variable because it's declared within the if else loop so it's scope is limited to only the if else loop. 

Fixes are to either console.log in both the if and else statements, or delcare the variable outside of the loop and only reassign it inside of the loops.


### Question 2
The console.log would log `Michael Jordan`, because without using the spread operator,the reference of the objects memory is whats really being passed to the new variable, meaning modifying one will change the other.


### Question 3
The function following code will log, 
`Paul is the hardest working person in the room.`,
followed by, 
`Laisha is also the hardest working person in the room.`

This happens because of scope, in shoutout, theHustler is assigned to Paul, but in the outerscope it's assigned to Laisha.

Calling the shoutout function run it's code that has theHustler as Paul while the console.log is running directly in the outerscope where theHustler is assigned to Laisha.


### Question 4
The purpose of rest parameters are to take in an indefinite amount of arguments in the case where the number of arguments is unknown or can be any length.

You can create a rest parameter by adding three dots before your parameter when delclaring a function ex. normal is `(num)`, rest parameter is, `(...num)`.

```js
const sum = (...nums) => {
    let total = 0;
    for (let num of nums){
        total += num;
    }
    return total;
}

sum(1, 2, 10); // 13
sum(5); // 5
sum(100, 200, 800, 1, 1, 1); // 1103;
```

The function above finds the sum of an indefinite amount of arguments through the use of the rest operator, and looping through the colective parameter.

### Question 5
Scope is the limits or reach of a variable, function, or object. It's where they can be accessed in the code.

You can think of the scope of a variable, function, or object like different rooms in a house. Each room has their own objects, if you were in one room, without being inside the other you can't move, touch, or interact with anything in a different room. You can think of the outerscope as a main room that has a one way path/connection to every other room.

```js
const scopeEx = (nums) => {
    // Correct usage of scope
    let total = 0;
    for (let num of nums){
        total += num
    }
    return total;
}

const scopeEx = (nums) => {
    // Incorrect
    for (let num of nums){
        let total = 0;
        total += num;
    }
    return total;
}
```

The difference between the two functions is where total is declared. Because total is declared in the for loop in the second function (one room), it's unable to be used in the outerscope.

The first function however, declares total in the outerscope/main room which allows you to use it in a function but still return it.

### Question 6
Javascript modules are a way to prevent code from working on a global scale or from working in other modules unless explicity stated through exporting and importing. Benefits include, better organization, and more reusable code.

You can export a function by using module.exports = function; at the end of a js file with functions in it. Replace function with the function name, if multiple functions want to be exported, use {} after the = and inside list every function with a comma to seperate.

To important, at the beginning of the js you want to import the function into, you declare all of the functions in {} if multiple , seperated by commas, if you only want to import one just type the function name without {}. Once listed, type = require('./filename') with filename replaced with the name of the js file your exporting from. Require lets the computer know where these functions your exporting are from.

Examples:

```js
module.exports = {
    sum,
    multiply,
    divide,
    subtract,
};

const {
    sum,
    multiply,
    divide,
    subtract,
} = require('./filename');
```
### Question 7
After this code runs, the values held by `fruits`, will be
```js
['apple', 'banana', 'cherry', 'date']
```
and `fruitMinusOne` will be
```js
['apple', 'banana', 'cherry']
```
It's necessary to make a copy of the array to make it a pure function because the requirments of a pure function are to not modify the argument being passed in.

We want to avoid mutating the input in the case where we want to use the array `fruits` again with it's original array rather then the mutated variation.

### Question 8
I would use an `object` to represent the items in the cart, this is because an object is mutatable and each item in the cart has a quantity/value which can be represented through the key/value pairs in an object.

I would represent the entire shopping cart with an `array` since it holds each `object`. That way you'll be able to iterate through each `object` or item if needed.

```js
  const shoppingCart = [
    {
      name: 'glasses',
      quantity: 1,
      priceOfEach: 999.00,
    },
    {
      name: 'Mark',
      quantity: 2,
      priceOfEach: 5.00,
    },
    {
      name: 'Chris',
      quantity: 8,
      priceOfEach: 5.00,
    },
    {
      name: 'Gabriel',
      quantity: 1,
      priceOfEach: 10,
    }
  ]
```
