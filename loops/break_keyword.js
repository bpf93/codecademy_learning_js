/*The break keyword allows programs to “break” out of the loop from within the loop’s block.

Let’s check out the syntax of a break keyword:
*/

for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}
 
console.log('Orange you glad I broke out the loop!');
/*This is the output for the above code:

Banana.
Banana.
Banana.
Orange you glad I broke out the loop!
*/

/*Exercise
1.
Log each element from rapperArray in a for loop with the iterator variable i.

2.
After the for loop, log the string "And if you don't know, now you know." to the console. Note: since there’s a single quote character, ', in our string, we can use double quotes around the string to make sure character prints.

3.
Add a break inside your loop’s block that breaks out of the loop if the element at the current index in the rapperArray is 'Notorious B.I.G.'.

*/
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
if (rapperArray[i] === 'Notorious B.I.G.'){
  break;
  }
}
console.log("And if you don't know, now you know.");
/* 
Output:
Lil' Kim
Jay-Z
Notorious B.I.G.
And if you don't know, now you know.
*/