export function textToChars(text: string) {
  return text.split("");
}

export function isNumber(value: any) {
  const NUMBERS = new RegExp(/[0-9]/);
  return NUMBERS.test(value);
}

export function isLetter(value: any) {
  const LETTERS = new RegExp(/[a-z]/i);
  return LETTERS.test(value);
}

export function isWhiteSpace(value: any) {
  const WHITESPACE = new RegExp(/\s/);
  return WHITESPACE.test(value);
}

export function isQuoteMark(value: any) {
  const QUOTES = new RegExp(/["']/);
  return QUOTES.test(value);
}
