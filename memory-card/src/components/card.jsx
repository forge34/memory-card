import React, { useContext, useEffect, useState } from "react";
import "../style/card.css";


export default function Card({ end ,isReady,setReady }) {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setReady(true);

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
  }, [isReady, setReady]);

  const ready = isReady ? "anim" : "";
  const ended = end ? " end" : "";

  return (
    <div className="card">
      <div
        className={ready + ended}
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
