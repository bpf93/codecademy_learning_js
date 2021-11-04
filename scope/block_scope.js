/*
When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. We say that variable has block scope because it is only accessible to the lines of code within that block.

Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block.

Block scope works like this:
*/

const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};
 
logSkyColor(); // blue 
console.log(color); // ReferenceError

/*
We define a function logSkyColor().

Within the function, the color variable is only available within the curly braces of the function.
If we try to log the same variable outside the function, it throws a ReferenceError.
*/

/*
the variable lightWaves is defined within the block. when it is logged inside of the block and the function is called, it prints, however when it is logged outside of the block, there is a Reference Error. 
*/
function logVisibleLightWaves() {
  const lightWaves = 'Moonlight'
  console.log(lightWaves)
  };

  logVisibleLightWaves()
  console.log(lightWaves) //gives Reference Error, outside of scope