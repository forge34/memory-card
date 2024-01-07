import React from "react";
import "../style/cardcontainer.css";
import Card from "./card";
import { useState } from "react";

export default function Cardcontainer({ setScore }) {
  const [animEnd, setAnimEnd] = useState(false);
  const [startAnim ,setAnimStart] = useState(true)

  function handleClick(name) {
    setScore((prev) => prev + 1);
    setAnimEnd(false)
    setAnimStart(true)
  }

  function handleAnimEnd() {
    setAnimEnd(true);
    setAnimStart(false);

  }

  const probs = {
    hClick: handleClick,
    onAnimEnd: handleAnimEnd,
    animReady: animEnd,
    animStart:startAnim,
  };

  return (
    <div className="card-container">
      <Card {...probs}></Card>
      <Card {...probs}></Card>
      <Card {...probs}></Card>
      <Card {...probs}></Card>
    </div>
  );
}
