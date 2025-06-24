var maxAverageRatio = function (classes, extraStudents) {
  classes.forEach((el) => {
    const [pass, total] = el;
    const benefitForNextStudent = (pass + 1) / (total + 1) - pass / total;
    el.push(benefitForNextStudent);
  });

  heapify(classes);

  for (let i = 0; i < extraStudents; i += 1) {
    classes[0][0] += 1;
    classes[0][1] += 1;

    const [pass, total] = classes[0];
    classes[0][2] = (pass + 1) / (total + 1) - pass / total;

    siftDown(0, classes);
  }

  return (
    classes.reduce((total, [pass, students]) => total + pass / students, 0) /
    classes.length
  );
};

const heapify = (heap) => {
  const start = Math.floor(heap.length / 2) - 1;
  for (let i = start; i >= 0; i -= 1) {
    siftDown(i, heap);
  }
};

const siftDown = (start, heap) => {
  let current = start;

  while (true) {
    const left = current * 2 + 1;
    const right = left + 1;
    let next = current;

    if (heap[left] && heap[left][2] > heap[next][2]) next = left;
    if (heap[right] && heap[right][2] > heap[next][2]) next = right;

    if (next !== current) {
      [heap[current], heap[next]] = [heap[next], heap[current]];
      current = next;
    } else break;
  }
};
