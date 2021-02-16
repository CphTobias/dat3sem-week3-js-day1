//a) Create the two arrays below, spelled exactly as they are given. This will form the start for all the following questions.
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//b) Create a new array called all, which should be a concatenation of the two arrays given above, starting with the boys and ending with the girls.
let allModern = [...boys, ...girls];
const all = boys.concat(girls);
console.log(all);

// c) The array type has a cool method to reduce an array into a single string join() (you will love this method)
//    1. Create a comma-separated string containing all the names from the all-array, separated by commas.
//    2. reate a hyphen (-) separated string containing all the names from the all-array, separated by hyphens.
const allNamesComma = all.join(", ");
const allNamesHyphen = all.join(" - ");
console.log(allNamesComma);
console.log(allNamesHyphen);

//d)  Add the names Lone and Gitte to the end of the array (remember, all can be done in one-liners)
allModern = [...girls, "Lone", "Gitte"];
all.push("Lone", "Gitte");

//e)  Add the names, Hans and Kurt, to the start of the array
allModern = ["Hans", "Kurt", ...boys];
all.unshift("Hans", "Kurt");
console.log(all);

// f)  Remove the first name in the array (Hans)
all.shift();
// g)  Remove the last name from the array (Gitte)
all.pop();
console.log(all);

//h) Remove Ole and Janne from the middle of the array
all.splice(3, 2);
console.log(all);

//i) Sanne thinks it’s unfair that the boys have to come first, reverse the all array, so that the girls come first.
all.reverse();
console.log(all);

//j) Peter thinks that this is just as unfair and suggests that the array should be sorted. Sort the array.
all.sort();
console.log(all);

// k) The default sort algorithm doesn’t handle the situation where the name can be either capitalized or not.
// Write a user-defined sort method to fix this problem.
all.sort((a, b) => a.toLowerCase().length - b.toLowerCase().length);
console.log(all);

//l) Convert all the names in the array to uppercase.
const arrayToUpperCase = all.map(person => person.toUpperCase());
console.log(arrayToUpperCase);

//m) Create a new array containing all the names that start with either “l” or “L” (hint: use the filter function with a sufficient callback).
const filteredPeople = all.filter(
  person => person.startsWith("L") || person.startsWith("l")
);
console.log(filteredPeople);
