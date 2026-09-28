export interface HighlightedWord {
  /** The exact word as it appears in the quote (matched case-insensitively). */
  word: string;
  /** The extra context shown in the tooltip when this word is hovered. */
  context: string;
}

export interface QuoteData {
  id: string;
  /** The full quote, written exactly as it appears in the book. */
  text: string;
  /** Where it's from, e.g. "1984 — George Orwell". */
  source: string;
  /** The subset of words inside "text" that should be hoverable. */
  highlights: HighlightedWord[];
}