import React, { useState, useEffect } from "react";
import "./Characters.css";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [listaCharactersCompleta, setListaCharacters] = useState([]);

  console.log(
    characters.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    )
  );

  async function getCharacters() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    console.log(data.results);
    setCharacters(data.results);
    setListaCharacters(data.results);
  }

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    setCharacters(
      listaCharactersCompleta.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <>
      <input
        type="text"
        placeholder="Pesquisar"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="characters-container">
        {characters.map((characteres) => (
          <div key={characteres.id}>
            <p>{characteres.name}</p>
            <img src={characteres.image} alt={characteres.name} />
          </div>
        ))}
      </div>
    </>
  );
}
