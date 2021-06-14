import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import who from '../../assets/images/whois.png';
import { StyledCard } from './style';
import pball from '../../assets/images/pball.png';

const Card = ({ name, image, show, ability, captured, type, type2, moves }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <StyledCard onClick={handleClick}>
      {show === true ? (
        <div className="cardwrapper">
          <img src={image} alt={name} />
          <div className="cardname">
            {name}
            {captured ? (
              <img className="capturedimg" src={pball} alt="captured" />
            ) : null}
          </div>

          <Modal
            open={openModal}
            setOpen={setOpenModal}
            image={image}
            name={name}
            ability={ability}
            captured={captured}
            type={type}
            type2={type2}
            moves={moves}
          />
        </div>
      ) : (
        <div className="whocard">
          <img src={who} alt="whocard" />
          <Modal open={openModal} setOpen={setOpenModal} />
        </div>
      )}
    </StyledCard>
  );
};

export default Card;
