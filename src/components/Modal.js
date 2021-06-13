import React from 'react';

function Modal({ open, setOpen }) {
  return <div>{open ? <div>Opened</div> : null}</div>;
}

export default Modal;
