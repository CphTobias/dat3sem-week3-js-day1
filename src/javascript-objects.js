// 1) Create an object with four different properties, with values,
// of your own choice (ex: name, birthday, hobby, email).
const person = {
  name: "Bob",
  phoneNumber: "321121",
  jacked: true,
  email: "bob@bob.com",
};

// Use a for-in loop (as sketched below) to demonstrate that we can iterate over the properties in an object.
for (prop in person) {
  console.log(prop, person[prop]);
}

// Use the delete keyword to demonstrate we can delete existing properties from an object
//(delete a property, and iterate over the properties again)
delete person.email;

for (prop in person) {
  console.log(prop, person[prop]);
}

// Add a new property to your object to demonstrate that we can add new properties to existing objects
person.lastname = "Thebuilder";
console.log(person);

// 2) Create a Constructor function to create new Persons having:
//   *) a firstName, lastName and an age.
//   *) A method to get details about the Person

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.getAllDetails = () => {
    return `First name: ${this.firstName}, Last name: ${this.lastName}, Age: ${this.age}`;
  };
}

const p = new Person("Bob", "Thebuilder", 31);

console.log(p.getAllDetails());
