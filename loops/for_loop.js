/*A for loop contains three expressions separated by ; inside the parentheses:

1.an initialization starts the loop and can also be used to declare the iterator variable.
2.a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
3.an iteration statement is used to update the iterator variable on each loop.

The for loop syntax looks like this:
*/

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

/*In this example, the output would be the following:

0
1
2
3
*/

/* to loop in reverse:
-Set the iterator variable to the highest desired value in the initialization expression.
-Set the stopping condition for when the iterator variable is less than the desired amount.
-The iterator should decrease in intervals after each iteration.
*/

for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}