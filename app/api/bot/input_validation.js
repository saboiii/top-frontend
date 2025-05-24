const SUITS = {
  s: 'Spades',
  h: 'Hearts',
  d: 'Diamonds',
  c: 'Clubs'
};

const RANKS = [
  'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'
];

export function validateIndices(ogIndex, subOGIndex) {
  if (isNaN(Number(ogIndex)) || isNaN(Number(subOGIndex))) {
    return { isValid: false, error: 'OG and SubOG indices must be numbers.' };
  }

  const ogIndexNum = parseInt(ogIndex, 10);
  const subOGIndexNum = parseInt(subOGIndex, 10);

  if (ogIndexNum < 1 || ogIndexNum > 13) {
    return { isValid: false, error: 'OG index must be between 1 and 13' };
  }

  if (subOGIndexNum < 1 || subOGIndexNum > 4) {
    return { isValid: false, error: 'SubOG index must be between 1 and 4' };
  }

  return { isValid: true };
}

export function validateInputs(ogIndex, subOGIndex, cardNotation) {
  const indexValidation = validateIndices(ogIndex, subOGIndex);
  if (!indexValidation.isValid) {
    return indexValidation;
  }

  const suitChar = cardNotation.charAt(0).toLowerCase();
  const rankStr = cardNotation.slice(1);
  const rankIndex = parseInt(rankStr, 10);

  if (!SUITS.hasOwnProperty(suitChar)) {
    return { isValid: false, error: 'Invalid suit. Use s(spades), h(hearts), d(diamonds), or c(clubs)' };
  }

  if (isNaN(rankIndex) || rankIndex < 1 || rankIndex > 13) {
    return { isValid: false, error: 'Rank must be between 1 and 13' };
  }

  const rank = RANKS[rankIndex - 1];
  const card = `${rank} of ${SUITS[suitChar]}`;

  return { isValid: true, card };
}