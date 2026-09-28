"use client"
import { useState } from "react";
import styles from "./videoFragment.module.css";
import type { VideoFragmentData } from "./videoFragment.types";

export default function VideoFragment({
  id,
  videoSrc,
  title,
  translation,
}: VideoFragmentData) {
  const [showTranslation, setShowTranslation] = useState(false);

  function toggleTranslation() {
    setShowTranslation((current) => !current);
  }

  // 1. Split the translation by period.
  // 2. Filter out any empty strings (in case the text ends with a period).
  const translationSentences = translation
    .split(".")
    .filter((sentence) => sentence.trim() !== "");

  return (
    <div className={styles.card} data-fragment-id={id}>
      <h3 className={styles.title}>{title}</h3>

      <video className={styles.video} src={videoSrc} controls />

      <button className={styles.toggleButton} onClick={toggleTranslation}>
        {showTranslation ? "Hide translation" : "Show translation"}
      </button>

      {/* Render the array of sentences as separate paragraphs */}
      {showTranslation && (
        <div className={styles.translationContainer}>
          {translationSentences.map((sentence, index) => (
            <p key={index} className={styles.translation} style={{ textAlign: "justify", marginBottom: "0.5rem" }}>
              {sentence.trim()}.
            </p>
          ))}
        </div>
      )}
    </div>
  );
}