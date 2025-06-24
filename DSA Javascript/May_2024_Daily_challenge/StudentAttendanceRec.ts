const MAX_INT = Math.pow(10, 9) + 7;
const checkRecord = (n: number) => {
  const arr = new Array(n + 1).fill(0).map((_) => new Array(6).fill(-1));
  const _checkRecord = (
    n: number,
    absentAmount: number,
    consecutiveLate: number
  ) => {
    if (absentAmount === 2 || consecutiveLate === 3) return 0;

    if (n === 0) return 1;

    const cell = absentAmount * 3 + consecutiveLate;
    const existingData = arr[n][cell];

    if (existingData !== -1) return existingData;

    const result =
      (_checkRecord(n - 1, absentAmount + 1, 0) +
        _checkRecord(n - 1, absentAmount, consecutiveLate + 1) +
        _checkRecord(n - 1, absentAmount, 0)) %
      MAX_INT;

    arr[n][cell] = result;

    return result;
  };

  return _checkRecord(n, 0, 0);
};
