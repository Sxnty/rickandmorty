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
      setCharacters(data.results);
    };
    getCharacters();
  }, [page]);
  const Navigation = (props) => {
    return (
      <>
        <button
          onClick={() => {
            if (page < 1) {
              console.log("No se puede volver atras.");
            } else {
              props.setPage(props.page - 1);
            }
          }}
        >
          Before
        </button>
        <button onClick={() => props.setPage(props.page + 1)}>Next</button>
      </>
    );
  };
  return (
    <main className="hero">
      <section className="hero__navigation">
        <Navigation page={page} setPage={setPage} />
      </section>
      <section className="hero__cards">
        {characters.map((element) => {
          return (
            <Character
              key={element.id}
              name={element.name}
              status={element.status}
              image={element.image}
              origin={element.origin.name}
            />
          );
        })}
      </section>
      <section className="hero__navigation">
        <Navigation page={page} setPage={setPage} />
      </section>
    </main>
  );
}

export default CharactersList;
