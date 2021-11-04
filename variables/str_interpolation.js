//In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals. Check out the following example where a template literal is used to log strings together:

const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.

/*
Notice that:

a template literal is wrapped by backticks ` (this key is usually located on the top of your keyboard, left of the 1 key).
Inside the template literal, you’ll see a placeholder, ${myPet}. The value of myPet is inserted into the template literal.
When we interpolate `I own a pet ${myPet}.`, the output we print is the string: 'I own a pet armadillo.'
*/