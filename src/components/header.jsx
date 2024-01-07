import React from "react";
import "../style/header.css"

export default function Header({score,bestScore}) {
  return (
    <div className="header-container">
      <h1>Memory card game</h1>

      <div className="score-container">
        <h4 className="score"> Score : {score ? score:0}</h4>
        <h4 className="best-score">Best score : {bestScore? bestScore:0}</h4>
      </div>
    </div>
  );
}
