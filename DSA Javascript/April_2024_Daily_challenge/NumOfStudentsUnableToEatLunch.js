var countStudents = function (students, sandwiches) {
  let movementToEnd = 0;

  while (sandwiches.length > 0) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      movementToEnd = 0;
    } else {
      students.push(students.shift());
      movementToEnd++;
      if (movementToEnd === students.length) {
        break;
      }
    }
  }
  return students.length;
};
