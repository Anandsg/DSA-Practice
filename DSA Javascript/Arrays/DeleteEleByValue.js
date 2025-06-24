function deleteValueFromArray(array, valueToDelete) {
  const newArray = [];
  let valueFound = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== valueToDelete) {
      newArray.push(array[i]);
    } else {
      valueFound = true;
    }
  }

  if (valueFound) {
    return newArray;
  } else {
    return []; // Return an empty array if value is not found
  }
}

const array = [1, 2, 3, 4, 5];
const valueToDelete = 3;

const newArray = deleteValueFromArray(array, valueToDelete);

if (newArray.length > 0) {
  // Print the new array
  console.log(newArray.join(" "));
} else {
  console.log("Value not found in the array.");
}
