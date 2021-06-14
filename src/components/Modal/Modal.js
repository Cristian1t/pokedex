import React from 'react';
import whois from '../../assets/images/whois.png';
import pball from '../../assets/images/pball.png';
import { StyledModal } from './style';

function Modal({ open, image, name, ability, captured, type, type2, moves }) {
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
                {name !== undefined ? name : '?'}{' '}
                {captured ? (
                  <img className="capturedimg" src={pball} alt="captured" />
                ) : null}
              </div>
              <div className="pokemon-ability">
                Ability: {ability !== undefined ? ability : '?'}
              </div>
              <div className="pokemon-ability">
                Type: {type !== undefined ? type : '?'}{' '}
                {type2 !== undefined ? ` / ${type2}` : null}
              </div>
              <div className="moves">
                <div className="moveslable">Moves:</div>
                <div>
                  {moves !== undefined
                    ? moves
                        .slice(0, 4)
                        .map((move, index) => (
                          <div key={index}> {move.move.name}</div>
                        ))
                    : '?'}
                </div>
              </div>
            </div>
          </div>
        </StyledModal>
      ) : null}
    </>
  );
}

export default Modal;
