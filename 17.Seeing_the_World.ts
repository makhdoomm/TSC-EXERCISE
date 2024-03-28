// Store the locations in a array. Make sure the array is not in alphabetical order
let Places :string[] = ['India' , 'Amrica' , 'Italy' , 'Gilgit' , 'Chitral'];

// Print your array in its original order.
console.log('Orignal' + Places);

//Print your array in alphabetical order without modifying the actual list.
console.log('copy ' + [...Places].sort());


// Show that your array is still in its original order by printing it.
console.log('Orignal' + Places);

//Print your array in reverse alphabetical order without changing the order of the original list
console.log(' copy ' + [...Places].sort().reverse());

// Show that your array is still in its original order by printing it again.
console.log('Orignal' + Places);

// Reverse the order of your list. Print the array to show that its order has changed.
console.log(' Orignal ' + Places.reverse());

//Reverse the order of your list again. Print the list to show it’s back to its original order
console.log(' Orignal ' + Places.reverse());

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(' Orignal ' + Places.sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(' Orignal ' + [...Places].sort().reverse());

