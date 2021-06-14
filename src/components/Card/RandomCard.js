import React, { useContext } from 'react';
import Card from './Card';
import pball from '../../assets/images/pball.png';
import { CollectionContext } from '../../contexts/CollectionContext';
import { StyledRandomCard } from './style';

function RandomCard() {
  const { notcoughtlist, coughtlist, setCoughtlist, getrandom, setGetRandom } =
    useContext(CollectionContext);

  const handleClick = () => {
    setGetRandom(
      notcoughtlist.splice(
        Math.floor(Math.random() * notcoughtlist.length),
        1
      )[0]
    );
  };

  const handleCatch = () => {
    setCoughtlist([...coughtlist, getrandom]);
    handleClick();
  };
  console.log(getrandom);
  return (
    <StyledRandomCard>
      {getrandom.length !== 0 ? (
        <div className="cardwrapper">
          <Card
            image={getrandom.sprites?.other.dream_world.front_default}
            name={getrandom.name}
            show={true}
            ability={getrandom.abilities[0].ability.name}
            type={getrandom.types[0].type.name}
            type2={getrandom.types[1]?.type.name}
            moves={getrandom.moves}
          />
          <button className="catchbutton" onClick={handleCatch}>
            <img src={pball} alt="pokéball" />
            CATCH
          </button>
        </div>
      ) : (
        <div className="catchallwrapper">
          <img src={pball} alt="pokéball" />
          <button className="catchallbutton" onClick={handleClick}>
            Catch 'em all
          </button>
        </div>
      )}
    </StyledRandomCard>
  );
}

export default RandomCard;
