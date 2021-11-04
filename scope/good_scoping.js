//Here’s another example of how to use block scope, as defined within an if block:

const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // pink
  }
  console.log(color); // blue 
};
 
console.log(color); // ReferenceError

/*
We create a variable dusk inside the logSkyColor() function.
After the if statement, we define a new code block with the {} braces. Here we assign a new value to the variable color if the if statement is truthy.
Within the if block, the color variable holds the value 'pink', though outside the if block, in the function body, the color variable holds the value 'blue'.
While we use block scope, we still pollute our namespace by reusing the same variable name twice. A better practice would be to rename the variable inside the block.
*/