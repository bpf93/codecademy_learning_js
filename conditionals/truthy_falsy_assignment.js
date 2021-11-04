let username = '';
let defaultName;
 
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
 
console.log(defaultName); // Prints: Stranger

//shorthand using logical operators

let username = '';
let defaultName = username || 'Stranger';
 
console.log(defaultName); // Prints: Stranger

//another example

let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);

//if the value of tool were reassigned to marker, the value of writingUtensil would then equal markerxos