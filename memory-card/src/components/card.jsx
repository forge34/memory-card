import React, { useEffect, useState } from "react";
import "../style/card.css";

export default function Card({ setScore }) {
  const [img, setImg] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [end, setEnd] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    setIsReady(true);

    const random = () => {
      return Math.floor(Math.random() * 6) + 1;
    };

    async function data() {
      const rand = random();
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${rand}`);
      const res = await data.json();

      setImg(res.sprites.front_default);
      setName(res.name);
    }

    data();
  }, [isReady]);

  const ready = isReady ? "anim" : "";
  const ended = end ? "end" : "";

  function handleClick() {
    setEnd(false);
    setScore();
    setIsReady(false);
  }

  return (
    <div className="card" onClick={handleClick}>
      <div
        className={ready + " " + ended}
        onAnimationEnd={() => {
          setEnd(true);
        }}
      >
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