import React, { createContext, useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const CollectionContext = createContext();

const CollectionProvider = ({ children }) => {
  const [notcoughtlist, setNotcoughtlist] = useState([]);
  const [coughtlist, setCoughtlist] = useLocalStorage('coughtlist', []);
  const [getrandom, setGetRandom] = useLocalStorage('random', []);

  const getAllPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    const data = await res.json();

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setNotcoughtlist((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <CollectionContext.Provider
      value={{
        notcoughtlist,
        setNotcoughtlist,
        coughtlist,
        setCoughtlist,
        getrandom,
        setGetRandom,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionProvider;
