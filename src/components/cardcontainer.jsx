import React from "react";
import "../style/cardcontainer.css";
import Card from "./card";
import { useState } from "react";

export default function Cardcontainer({ setScore }) {
  const [animEnd, setAnimEnd] = useState(false);
  const [startAnim ,setAnimStart] = useState(true)
  const [cardList ,setCardList] = useState(new Array(0))
  const [lost,setLost] = useState(false)

  function handleClick(name) {
    setAnimEnd(false)
    setAnimStart(true)

    if (!cardList.includes(name)){
      setCardList([...cardList,name])
      setScore((prev) => prev + 1);
    }
    else {
      setScore(0)
      setLost(true)
    }
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

      {lost && <h1 className="lose-text">You lost</h1>}
    </div>
  );
}
