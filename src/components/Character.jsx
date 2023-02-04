import React from "react";

function Character(character) {
  return (
    <div key={character.id} className="hero__card">
      <img src={character.image} alt="" />
      <h2>{character.name}</h2>
      <div className="card__info">
        <p>Status: {character.status}</p>
        <p>Origin: {character.origin}</p>
      </div>
    </div>
  );
}

export default Character;
