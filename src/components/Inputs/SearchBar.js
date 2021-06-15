import React, { useContext, useState } from 'react';
import Card from '../Card/Card';
import { CollectionContext } from '../../contexts/CollectionContext';
import { StyledSearch } from './style';
import UnlockAll from '../Buttons/UnlockAll';
import Restart from '../Buttons/Restart';
import FilterRadio from './FilterRadio';
import Pnumber from './Pnumber';

function SearchBar() {
  const [search, setSearch] = useState('');
  const { caughtlist, notcaughtlist, showall, hideclass } =
    useContext(CollectionContext);

  const filteredcaughtlist = caughtlist.filter((val) => {
    if (search === '') {
      return val;
    } else if (val.name.includes(search)) {
      return val;
    }
    return false;
  });

  const filterednotcaughtlist = notcaughtlist.filter((val) => {
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
        <UnlockAll />
        <Restart />
      </div>
      <div className="middlecollection">
        <FilterRadio />
        <Pnumber />
      </div>
      <div className="botcollection">
        {filteredcaughtlist.map((pokemon, index) => {
          return (
            <Card
              hideclass={hideclass === 'hidecaught' ? 'hidden' : null}
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

        {filterednotcaughtlist.map((pokemon, index) => {
          return (
            <Card
              hideclass={hideclass === 'hidenotcaught' ? 'hidden' : null}
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
