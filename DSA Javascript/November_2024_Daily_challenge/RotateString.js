function rotateString(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  // Create a new string by concatenating s with itself
  const doubledS = s + s;
  return doubledS.includes(goal);
}
