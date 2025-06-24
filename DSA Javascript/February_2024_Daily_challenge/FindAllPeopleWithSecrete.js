var findAllPeople = function (n, meetings, firstPerson) {
  let parent = [...Array(n).keys()];
  let size = [...Array(n).fill(1)];

  const find = (node) => {
    if (node === parent[node]) {
      return node;
    }
    parent[node] = find(parent[node]);
    return parent[node];
  };

  const union = (n1, n2) => {
    const p1 = find(n1);
    const p2 = find(n2);
    if (p1 === p2) {
      return;
    }
    if ((p1 === 0 || size[p1] > size[p2]) && p2 !== 0) {
      parent[p2] = p1;
      size[p1] += size[p2];
    } else {
      parent[p1] = p2;
      size[p2] += size[p1];
    }
  };

  meetings.sort((a, b) => a[2] - b[2]);
  union(0, firstPerson);
  let prevTime = 0;
  const stack = [];
  for (let [node1, node2, time] of meetings) {
    if (prevTime !== time) {
      prevTime = time;
      while (stack.length > 0) {
        find(stack[stack.length - 1]);
        if (parent[stack[stack.length - 1]] !== 0) {
          parent[stack[stack.length - 1]] = stack[stack.length - 1];
        }
        stack.pop();
      }
    }
    union(node1, node2);
    stack.push(node1, node2);
  }

  const res = [];
  for (let index = 0; index < parent.length; index += 1) {
    find(index);
    if (parent[index] === 0) {
      res.push(index);
    }
  }
  return res;
};
