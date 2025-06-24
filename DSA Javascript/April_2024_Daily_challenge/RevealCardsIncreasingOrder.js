var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);
  const reveal = [deck.pop()];

  while (deck.length) {
    reveal.unshift(reveal.pop());
    reveal.unshift(deck.pop());
  }

  return reveal;
};
