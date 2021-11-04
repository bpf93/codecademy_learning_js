/*In global scope, variables are declared outside of blocks. These variables are called global variables. Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.

Let’s take a look at an example of global scope:
*/
const color = 'blue';
 
const returnSkyColor = () => {
  return color; // blue 
};
 
console.log(returnSkyColor()); // blue
/*
Even though the color variable is defined outside of the block, it can be accessed in the function block, giving it global scope.
In turn, color can be accessed within the returnSkyColor function block.
*/