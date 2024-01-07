import React from "react";
import "../style/cardcontainer.css";
import Card from "./card";
import { useState } from "react";

export default function Cardcontainer({ setScore, setBest }) {
  const [isReady, setIsReady] = useState(false);
  const [end, setEnd] = useState(false);

  function handleClick(e) {
    const parent =
      e.target.parentNode.parentNode.parentNode;


    if (parent.getAttribute("class") == "card") {
      setScore((prev) => {
        return prev + 1;
      });

      setEnd(false);
      setIsReady(false);
    }
  }

  function handleAnimation(e) {
    if (e.target.classList[0] == "anim") {
      setEnd(true);
    }
  }

  return (
    <div
      className="card-container"
      onAnimationEnd={handleAnimation}
      onClick={handleClick}
    >
      <Card end={end} isReady={isReady} setReady={setIsReady}></Card>
      <Card end={end} isReady={isReady} setReady={setIsReady}></Card>
      <Card end={end} isReady={isReady} setReady={setIsReady}></Card>
      <Card end={end} isReady={isReady} setReady={setIsReady}></Card>
    </div>
  );
}
