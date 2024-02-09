function divide(list) {
  // Group strings into two arrays based on length (even or odd)
  const grouped = _.groupBy(list, function (input) {
    return input.length % 2 === 0 ? 'even' : 'odd';
  });

  // Return arrays of arrays
  return [grouped.even, grouped.odd];
}

// Input array
const myList = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'melon'];

// Call the function and print the result
console.log(divide(myList));
