// 1) Add this code,
function Person(name) {
  this.name = name;
  const self = this;
  console.log("Name: " + this.name);
  setTimeout(
    function () {
      //Because we are defining a function this is now local to this function.
      //However if we created it with an arrow function, this would now be local to the Person function
      console.log("Hi " + self.name);
      console.log("Hi  " + this.name);
    }.bind(this),
    2000
  );
}

//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut"); //This calls the function

//I belive we created an instance of Person, which means,
//that name is now equivelant to whatever we defined when we constructed the Person
console.log("I'm global: " + name); //Explain this

// 2) Create a Person instance and rerun the example as sketched below:
var p = new Person("Kurt Wonnegut");
console.log("I'm global: " + name); //What’s different ?

// Write, run and UNDERSTAND the example below

//Create a function which will log out this.message
var greeter = function () {
  console.log(this.message);
};

//Objects containing a message
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

//Bind our comp1 and comp2 which means that this.message now exists inside our greeter function
//It's also relevant to see that we can bind different messages
//resulting in different outputs
var g1 = greeter.bind(comp1);
var g2 = greeter.bind(comp2);
setTimeout(g1, 500);
setTimeout(g2, 1000);
