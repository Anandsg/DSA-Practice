if (n == 1) return 0;

const halfLength = Math.pow(2, n - 1) / 2;
if (k <= halfLength) return kthGrammar(n - 1, k);
else return 1 - kthGrammar(n - 1, k - halfLength);