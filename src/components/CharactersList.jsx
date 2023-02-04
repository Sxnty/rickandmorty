import React, { useState } from "react";
import { useEffect } from "react";
import Character from "./Character";

function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character?page=${page}`;
    const getCharacters = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setCharacters(data.results);
    };
    getCharacters();
  }, [page]);
  const Navigation = (props) => {
    return (
      <section>
        <button onClick={() => {
          if(page <1) {
            console.log('No se puede volver atras.')
          } else {
            props.setPage(props.page - 1)
          }
        }}>Before</button>
        <button onClick={() => props.setPage(props.page + 1)}>Next</button>
      </section>
    );
  };
  return (
    <div>
      <Navigation page={page} setPage={setPage} />
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
    </div>
  );
}

export default CharactersList;
