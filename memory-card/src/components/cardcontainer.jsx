import React from "react";
import "../style/cardcontainer.css";
import Card from "./card";

export default function Cardcontainer({setScore,setBest}) {

  function handleScore(){
    setScore((prev) => prev+1)
  }
  return (
    <div className="card-container">
      <Card setScore={handleScore}></Card>
      <Card setScore={handleScore} ></Card>
      <Card setScore={handleScore}></Card>
      <Card setScore={handleScore}></Card>
    </div>
  );
}
