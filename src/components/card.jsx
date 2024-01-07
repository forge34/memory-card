import React, { useEffect, useState } from "react";
import "../style/card.css";

export default function Card({
  hClick,
  onAnimEnd,
  animStart,
  animReady,
}) {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const random = () => {
      return Math.floor(Math.random() * 15) + 1;
    };

    async function data() {
      const rand = random();
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${rand}`);
      const res = await data.json();

      setImg(res.sprites.front_default);
      setName(res.name);
    }

    data();
  }, [animStart]);

  const end = animReady ? "end" : "";
  const start = animStart ? "anim" : "";

  return (
    <div
      className="card"
      onClick={() => {
        hClick(name);
      }}
    >
      <div className={start + " " + end} onAnimationEnd={onAnimEnd}>
        <div className="back">
          <img className="back-img" src="../../back.png"></img>
        </div>

        <div className="front">
          <img className="front-img" src={img}></img>
          <h3 className="card-name">{name}</h3>
        </div>
      </div>
    </div>
  );
}
