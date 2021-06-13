import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const StyledCard = styled.div`
  background: lightgreen;
  height: 250px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-width: 15rem;
  :hover {
    background: red;
  }
  img {
    max-width: 200px;
  }
  .notcought {
    display: none;
  }
`;

const Card = ({ name, image, show }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(!openModal);
  };
  return (
    <StyledCard onClick={handleClick}>
      <div className={show}>
        <img src={image} alt={name} />
      </div>
      <Modal open={openModal} setOpen={setOpenModal} />
    </StyledCard>
  );
};

export default Card;
