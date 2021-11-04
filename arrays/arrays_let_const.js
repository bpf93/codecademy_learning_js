//Notice that you can re-assign elements in an array and re-assign an entire new array to a variable declared using the let keyword.

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo'
console.log(condiments)
condiments = ['Mayo']
console.log(condiments)

utensils[3] = 'Spoon'
console.log(utensils)