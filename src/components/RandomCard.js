import React, { useContext } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { CollectionContext } from './CollectionContext';

const StyledRandomCard = styled.div``;

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
  console.log(notcoughtlist);
  console.log(coughtlist);
  console.log(getrandom);

  return (
    <StyledRandomCard>
      {getrandom.length !== 0 ? (
        <div>
          <Card image={getrandom.sprites?.other.dream_world.front_default} />
          <button onClick={handleCatch}>Catch</button>
        </div>
      ) : (
        <button onClick={handleClick}>Catch 'em all</button>
      )}
    </StyledRandomCard>
  );
}

export default RandomCard;
