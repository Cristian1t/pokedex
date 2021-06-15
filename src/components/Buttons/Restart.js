import React from 'react';
import { StyledRestartButton } from './style';

function Restart() {
  const handleReload = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <StyledRestartButton className="reload" onClick={handleReload}>
      Restart ↺
    </StyledRestartButton>
  );
}

export default Restart;
