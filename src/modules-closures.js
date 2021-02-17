// 1) Implement and test the Closure Counter Example from the Slides
function makeCounter() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: () => changeBy(1),
    decrement: () => changeBy(-1),
    value: () => privateCounter,
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1.value());
counter1.increment();
//Value has changed
console.log(counter1.value());
//Still the same value
console.log(counter2.value());

// 2) Implement a reusable function using the Module pattern that should
// encapsulate information about a person (name, and age) and returns an object with the following methods:
//    * setAge
//    * setName
//    * getInfo (should return a string like Peter, 45)

function createPerson(name, age) {
  let person = {
    name: name,
    age: age,
  };

  function setAge(age) {
    person.age = age;
  }

  function setName(name) {
    person.name = name;
  }

  function getInfo() {
    return `name: ${person.name}, age: ${person.age}`;
  }

  return {
    setAge,
    setName,
    getInfo,
  };
}

const person1 = createPerson("Bob1", 21);
const person2 = createPerson("Bob2", 31);

console.log(person1.getInfo());
person1.setName("ChangedBob");
person1.setAge(41);
console.log(person1.getInfo());

//Still the same
console.log(person2.getInfo());
