import React, { useContext } from 'react';
import { CollectionContext } from '../../contexts/CollectionContext';
import { StyledUnlockButton } from './style';

function UnlockAll() {
  const { showall, setShowall } = useContext(CollectionContext);

  const handleClick = () => {
    setShowall(!showall);
  };
  return (
    <StyledUnlockButton className="unlockbutton" onClick={handleClick}>
      Unlock all
    </StyledUnlockButton>
  );
}

export default UnlockAll;
