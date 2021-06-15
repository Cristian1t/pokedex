import React, { createContext, useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const CollectionContext = createContext();

const CollectionProvider = ({ children }) => {
  const [notcaughtlist, setNotcaughtlist] = useState([]);
  const [hideclass, setHideClass] = useState('');
  const [pnumber, setPnumber] = useLocalStorage('pnumber', 29);
  const [caughtlist, setCaughtlist] = useLocalStorage('caughtlist', []);
  const [getrandom, setGetRandom] = useLocalStorage('random', []);
  const [showall, setShowall] = useLocalStorage('unlockall', false);

  const getAllPokemons = async (pnumber) => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${pnumber}`
    );
    const data = await res.json();

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setNotcaughtlist((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons(pnumber);
  }, [pnumber]);

  return (
    <CollectionContext.Provider
      value={{
        notcaughtlist,
        setNotcaughtlist,
        caughtlist,
        setCaughtlist,
        getrandom,
        setGetRandom,
        showall,
        setShowall,
        hideclass,
        setHideClass,
        setPnumber,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionProvider;
