function wordBreak(s: string, wordDict: string[]): string[] {
  var res: string[][] = [];
  const recursion = (ss: string, curr: string[]) => {
    if (ss == "") {
      res.push(curr);
    }
    wordDict.forEach((word) => {
      if (ss.startsWith(word)) {
        var sss = ss.slice(word.length);
        var new_curr = curr.concat([word]);
        recursion(sss, new_curr);
      }
    });
  };
  recursion(s, []);
  return res.map((x) => x.join(" "));
}
