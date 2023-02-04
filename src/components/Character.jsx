import React from "react";

function Character(character) {
  return (
    <div key={character.id}>
      <img src={character.image} alt="" />
      <h1>{character.name}</h1>
      <p>Status: {character.status}</p>
      <p>gender: {character.gender}</p>
    </div>
  );
}

export default Character;
