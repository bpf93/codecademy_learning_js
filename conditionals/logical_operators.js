//When we use the && operator, we are checking that two things are true:
if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}
//if either condition is false, the && condition will evaluate to false and the else block will execute.

//If we only care about either condition being true, we can use the || operator:

if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}

//The ! not operator reverses, or negates, the value of a boolean:

let excited = true;
console.log(!excited); // Prints false
 
let sleepy = false;
console.log(!sleepy); // Prints true