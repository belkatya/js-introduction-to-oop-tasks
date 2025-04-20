export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
export const parseJson = (jsonString) => {
  try {
    return JSON.parse(jsonString);
  } catch {
    throw new ParseError('Invalid JSON string');
  }
};
// END
