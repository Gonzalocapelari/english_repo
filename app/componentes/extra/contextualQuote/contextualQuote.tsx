
import styles from "./contextualQuote.module.css";
import type { QuoteData } from "./contextualQuote.types";

export default function ContextualQuote({ text, source, highlights }: QuoteData) {
  // STEP 1 — split the sentence into words, but keep the spaces.
  // The parentheses inside the regex tell .split() to keep the matched
  // separator (the whitespace) as its own item in the resulting array,
  // instead of throwing it away.
  const everyWord = text.split(/(\s+)/);

  // STEP 2 — turn the "highlights" array into a Map for fast lookups.
  // A Map lets us ask "is this word highlighted?" instantly, instead of
  // looping through the whole highlights array for every single word.
  // Keys are lowercased so "Ministry" and "ministry" both match.
  const highlightMap = new Map(
    highlights.map((h) => [h.word.toLowerCase(), h.context])
  );

  return (
    <div className=""><blockquote className={styles.quote}>
      <p className={styles.text}>
        {everyWord.map((token, index) => {
          // Strip common punctuation before checking the map, so a word
          // followed by a comma or period (e.g. "Ministry,") still matches.
          const cleanWord = token.toLowerCase().replace(/[.,!?;:"']/g, "");
          const context = highlightMap.get(cleanWord);

          // STEP 3 — not a special word: render it as plain text.
          if (!context) {
            return <span key={index}>{token}</span>;
          }

          // STEP 3 (special word): wrap it with a tooltip span.
          // tabIndex={0} lets keyboard users "Tab" onto the word too,
          // not just hover it with a mouse.
          return (

            <span key={index} className={styles.keyword} tabIndex={0}>
              {token}
              <span className={styles.tooltip} role="tooltip">
                {context}
              </span>
            </span>
          );
        })}
      </p>
      <footer className={styles.source}>— {source}</footer>
    </blockquote><div className="h-2 w-full bg-blue-500"></div></div>);
}