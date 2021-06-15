import React, { useContext } from 'react';
import Card from './Card';
import pball from '../../assets/images/pball.png';
import { CollectionContext } from '../../contexts/CollectionContext';
import { StyledRandomCard } from './style';
import master from '../../assets/images/master.jpg';

function RandomCard() {
  const { notcaughtlist, caughtlist, setCaughtlist, getrandom, setGetRandom } =
    useContext(CollectionContext);

  const handleClick = () => {
    setGetRandom(
      notcaughtlist.splice(
        Math.floor(Math.random() * notcaughtlist.length),
        1
      )[0]
    );
  };

  const handleCatch = () => {
    setCaughtlist([...caughtlist, getrandom]);
    handleClick();
  };

  return (
    <StyledRandomCard>
      {getrandom !== undefined ? (
        getrandom.length !== 0 ? (
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
        )
      ) : (
        <div className="congrats">
          Congrats, you cought them all!
          <img className="masterimg" src={master} alt="masterimg" />
        </div>
      )}
    </StyledRandomCard>
  );
}

export default RandomCard;
