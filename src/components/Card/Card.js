import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import who from '../../assets/images/whois.png';
import { StyledCard } from './style';

const Card = ({ name, image, show, ability }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <StyledCard onClick={handleClick}>
      {show === true ? (
        <div className="cardwrapper">
          <img src={image} alt={name} />
          <div className="cardname">{name}</div>
        </div>
      ) : (
        <div className="whocard">
          <img src={who} alt="whocard" />
        </div>
      )}

      <Modal
        open={openModal}
        setOpen={setOpenModal}
        image={image}
        name={name}
        ability={ability}
      />
    </StyledCard>
  );
};

export default Card;
