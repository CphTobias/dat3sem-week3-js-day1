// 1) Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.).
// Use the filter method to create a new array with only names of length <=3.
// Use the forEach method to iterate and print (console.log) both the original and the new array.

const names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

const filteredNames = names.filter(name => name.length <= 3);

names.forEach(name => console.log(name));
filteredNames.forEach(name => console.log(name));

// 2) Use the names-array created above, and, using its map method, create a new array with all names uppercased.
const upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames);

//3)
function createUnorderedList(names) {
  let ul = "<ul>";
  ul = names.map(name => ul + `<li>${name}</li>`);
  ul = ul + "</ul>";
  return ul;
}

console.log(createUnorderedList(names));

//4)  Given this JavaScript array
var cars = [
  { id: 1, year: 1997, make: "Ford", model: "E350", price: 3000 },
  { id: 2, year: 1999, make: "Chevy", model: "Venture", price: 4900 },
  { id: 3, year: 2000, make: "Chevy", model: "Venture", price: 5000 },
  { id: 4, year: 1996, make: "Jeep", model: "Grand Cherokee", price: 4799 },
  { id: 5, year: 2005, make: "Volvo", model: "V70", price: 44799 },
];

// a) Use the filter filter function to get arrays with only:
//    * Cars newer than 1999
//    * Al  Volvo’s
//    * All cars with a price below 5000

const carsOver1999 = cars.filter(car => car.year > 1999);
console.log(carsOver1999);

const allVolvos = cars.filter(car => car.make === "Volvo");
console.log(allVolvos);

const carsUnder5000 = cars.filter(car => car.price < 5000);
console.log(carsUnder5000);

//4a)
//Not sure if this is what you are asking
function generateSqlStatements(cars) {
  const sqlStatements = cars.map(
    car =>
      `INSERT INTO cars (id, year, make, model, price) VALUES (${car.id}, ${car.year}, ${car.make}, ${car.model}, ${car.price})`
  );
  return sqlStatements;
}

const sqlStatements = generateSqlStatements(cars);
sqlStatements.forEach(statement => {
  //do call to database :)
  console.log(statement);
});
