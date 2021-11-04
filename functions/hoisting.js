//the hoisting feature in JavaScript allows access to function declarations before they’re defined. Take a look at example of hoisting:

greetWorld(); // Output: Hello, World!
 
function greetWorld() {
  console.log('Hello, World!');
}
//Notice how hoisting allowed greetWorld() to be called before the greetWorld() function was defined! Since hoisting isn’t considered good practice, we simply want you to be aware of this feature.