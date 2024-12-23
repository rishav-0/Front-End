// function declaration
function add(a, b) {
    console.log(a+b)
    return a + b;

}
console.log(add(2, 4));

//function expresssion
const subtract = function (a, b) {
  return a - b;
};
console.log(subtract(4, 2));

//arrow  fucntion
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

const divide = (a, b) => {
  return a / b;
};

console.log(divide(4, 2));

//anonymous function

// setTimeout(function () {
//   console.log("hello");
// }, 10000);

// setInterval(function () {
//   console.log("hello");
// }, 1000);

//immediate invoking function
(function () {
  console.log("hello");
})();

