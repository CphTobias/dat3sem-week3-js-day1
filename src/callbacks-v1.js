//1) Create a new JavaScript file and add these three functions
//Function Declaration
//Observe: no return type, no type on parameters

typeof n1 === "number";
typeof callback === "function";

function add(n1, n2) {
  return n1 + n2;
}

//Function Expression
var sub = function (n1, n2) {
  return n1 - n2;
};

//4)  Write a mul(n1, n2) function (inspired by add and sub) and use it as the callback for the cb function
function mul(n1, n2) {
  return n1 * n2;
}

//Callback example
var cb = function (n1, n2, callback) {
  try {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
      throw new Error("Not a number");
    }
    return (
      "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2)
    );
  } catch (err) {
    if (typeof n1 || n2 !== "number") {
      console.error("Error: " + err.message);
    } else if (typeof callback !== "function") {
      console.error("Error: " + err.message);
    } else {
      console.error(err.message);
    }
  }
};

// 2) Call the functions above as sketched below. It’s not about doing it as fast as you can, but about
// understanding what's happening, so make sure you understand each line.

//3
console.log(add(1, 2));

//function: add
console.log(add);

//3
console.log(add(1, 2, 3));

//NaN or "Not a Number" because it's missing the second prop
console.log(add(1));

//Result from the two numbers: 3 + 3 = 6
console.log(cb(3, 3, add));

//Result from the two numbers: 4 + 3 = 1
console.log(cb(4, 3, sub));

//Error
//You pass add as a function call instead of passing it as a prop (without the "()")
console.log(cb(3, 3, add()));

//Result from the two numbers: 3 + hh = 3hh
//Javascript doesn't care about logic :)
console.log(cb(3, "hh", add));

//using mul function
console.log(cb(4, 4, mul));

//5) Call cb, this time with an anonymous function that divides the first argument with the second

//Did you mean this?
console.log(cb(6, 3, (n1, n2) => n1 / n2));
