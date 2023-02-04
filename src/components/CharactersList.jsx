import React, { useState } from "react";
import { useEffect } from "react";
import Character from "./Character";

function CharactersList() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character";
    const getCharacters = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setCharacters(data.results);
    };
    getCharacters();
  }, []);

  return (
    <>
      {characters.map((element) => {
        return (
          <Character
            key={element.id}
            name={element.name}
            status={element.status}
            image={element.image}
            gender={element.gender}
          />
        );
      })}
    </>
  );
}

export default CharactersList;
