import React, { useContext, useState } from 'react';
import { CollectionContext } from '../../contexts/CollectionContext';

function Pnumber() {
  const [change, setChange] = useState();
  const { setPnumber } = useContext(CollectionContext);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPnumber(parseInt(change));
          localStorage.clear();
          window.location.reload();
        }}
      >
        <label htmlFor="pnumber">Number of pokémons(1-1118):</label>
        <input
          style={{ minWidth: '7rem' }}
          id="pnumber"
          name="pnumber"
          type="number"
          min="1"
          max="1118"
          placeholder={`default: 29`}
          onChange={(e) => {
            setChange(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default Pnumber;
