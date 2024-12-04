function addSpaces(s: string, spaces: number[]): string {
  let spaceIndex = 0;
  let finalWord = "";
  const spliten = s.split("");

  for (let i = 0; i < spliten.length; i++) {
    if (spaces[spaceIndex] === i) {
      finalWord = `${finalWord} ${spliten[i]}`;
      spaceIndex++;
      continue;
    }

    finalWord += spliten[i];
  }

  return finalWord;
}
