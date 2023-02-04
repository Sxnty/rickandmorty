import React from 'react'

function Character(character) {
  return (
    <div key={character.id}>
    <h1>{character.name}</h1>
    <p>Status: {character.status}</p>
    <p>gender: {character.gender}</p>
    <img src={character.image} alt="" />
  </div>
  )
}

export default Character