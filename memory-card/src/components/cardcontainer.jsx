import React from "react";
import "../style/cardcontainer.css";
import Card from "./card";
import { useState } from "react";

export default function Cardcontainer({ setScore, setBest }) {
  const [isReady, setIsReady] = useState(false);
  const [end, setEnd] = useState(false);

  function handleScore() {
    setScore((prev) => {
      return prev + 1;
    });

    setEnd(false);
    setIsReady(false);
  }

  function handleClick() {}

  function handleAnimation(e) {
    if (e.target.classList[0] == "anim") {
      setEnd(true);
    }
  }

  return (
    <div
      className="card-container"
      onAnimationEnd={handleAnimation}
      onClick={handleScore}
    >
      <Card end={end} isReady={isReady} setReady={setIsReady}></Card>
      <Card end={end} isReady={isReady} setReady={setIsReady}></Card>
      <Card end={end} isReady={isReady} setReady={setIsReady}></Card>
      <Card end={end} isReady={isReady} setReady={setIsReady}></Card>
    </div>
  );
}
