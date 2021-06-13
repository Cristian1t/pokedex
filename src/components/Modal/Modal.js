import React from 'react';
import styled from 'styled-components';
import whois from '../../assets/images/whois.png';

const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  .wrapper {
    margin: 10rem auto;
    width: 60%;
    background: white;
    color: black;
    display: grid;
    grid-template-columns: minmax(100px, auto) 1fr;
    position: relative;
    z-index: 10;
    border-radius: 1rem;
    .image {
      padding: 3rem;
      max-width: 300px;
      border-radius: 10px 0 0 10px;
      background: #fffacd;
    }
    .description {
      background: green;
      text-transform: capitalize;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      color: black;
    }
  }
`;

function Modal({ open, image, name, ability }) {
  return (
    <>
      {open ? (
        <StyledModal>
          <div className="wrapper">
            <img
              className="image"
              src={image !== undefined ? image : whois}
              alt={name}
            />
            <div className="description">
              <div className="pokemon-name">
                Name: {name !== undefined ? name : '?'}
              </div>
              <div className="pokemon-name">
                Ability: {ability !== undefined ? ability : '?'}
              </div>
            </div>
          </div>
        </StyledModal>
      ) : null}
    </>
  );
}

export default Modal;
