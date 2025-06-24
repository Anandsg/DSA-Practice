function minMovesToSeat(seats: number[], students: number[]): number {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  let totalMoves = 0;
  for (let i = 0; i < seats.length; i++) {
    totalMoves += Math.abs(seats[i] - students[i]);
  }
  return totalMoves;
}
