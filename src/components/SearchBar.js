import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { CollectionContext } from './CollectionContext';

const StyledSearch = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 1rem;
  padding: 1rem;
`;

function SearchBar() {
  const [search, setSearch] = useState('');
  const { coughtlist, notcoughtlist } = useContext(CollectionContext);

  const [showall, setShowall] = useState(false);

  const handleClick = () => {
    setShowall(!showall);
  };

  const filteredcoughtlist = coughtlist.filter((val) => {
    if (search === '') {
      return val;
    } else if (val.name.includes(search)) {
      return val;
    }
    return false;
  });

  const filterednotcoughtlist = notcoughtlist.filter((val) => {
    if (search === '') {
      return val;
    } else if (val.name.includes(search)) {
      return val;
    }
    return false;
  });

  return (
    <>
      <button onClick={handleClick}>show all</button>
      <input
        type="text"
        placeholder="search..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <StyledSearch>
        {filteredcoughtlist.map((pokemon, index) => {
          return (
            <Card
              key={index}
              image={pokemon.sprites.other.dream_world.front_default}
            />
          );
        })}
        {filterednotcoughtlist.map((pokemon, index) => {
          return (
            <Card
              show={showall ? 'cought' : 'notcought'}
              key={index}
              image={pokemon.sprites.other.dream_world.front_default}
            />
          );
        })}
      </StyledSearch>
    </>
  );
}

export default SearchBar;
