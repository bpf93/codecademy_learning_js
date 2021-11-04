//Well what happens if we try to change an array inside a function? Does the array keep the change after the function call or is it scoped to inside the function?

const flowers = ['peony', 'daffodil', 'marigold'];
 
function addFlower(arr) {
  arr.push('lily');
}
 
addFlower(flowers);
 
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

/*
So when you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well. You might also see this concept explained as pass-by-reference since what we’re actually passing the function is a reference to where the variable memory is stored and changing the memory.
*/