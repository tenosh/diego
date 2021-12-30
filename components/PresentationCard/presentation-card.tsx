import React from "react";
import styles from "./presentation-card.module.css";

/**
 * Presentation card for the home page.
 * @return {JSX.Element} The JSX code for the component.
 */
export function PresentationCard() {
  return (
    <>
      <div className="bg-gray-800 opacity-60 rounded-lg developer-info-container p-8 uppercase">
        <h1 className={styles["main-tittle"]}>el diego dev</h1>
      </div>
    </>
  );
}
