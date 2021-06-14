import React, { useContext, useState } from 'react';
import Card from '../Card/Card';
import { CollectionContext } from '../../contexts/CollectionContext';
import { StyledSearch } from './style';

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
    <StyledSearch>
      <div className="topcollection">
        <input
          className="searchinput"
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <button className="unlockbutton" onClick={handleClick}>
          Unlock all
        </button>
      </div>

      <div className="botcollection">
        {filteredcoughtlist.map((pokemon, index) => {
          return (
            <Card
              key={index}
              image={pokemon.sprites.other.dream_world.front_default}
              show={true}
              name={pokemon.name}
              ability={pokemon.abilities[0].ability.name}
              captured={true}
              type={pokemon.types[0].type.name}
              type2={pokemon.types[1]?.type.name}
              moves={pokemon.moves}
            />
          );
        })}

        {filterednotcoughtlist.map((pokemon, index) => {
          return (
            <Card
              show={showall}
              key={index}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              ability={pokemon.abilities[0].ability.name}
              type={pokemon.types[0].type.name}
              type2={pokemon.types[1]?.type.name}
              moves={pokemon.moves}
            />
          );
        })}
      </div>
    </StyledSearch>
  );
}

export default SearchBar;
