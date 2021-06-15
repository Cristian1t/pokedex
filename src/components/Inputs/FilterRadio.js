import React, { useContext } from 'react';
import { CollectionContext } from '../../contexts/CollectionContext';

function FilterRadio() {
  const { setHideClass } = useContext(CollectionContext);

  return (
    <form>
      <input
        id="caught"
        type="radio"
        value="cought"
        name="chose1"
        onClick={() => {
          setHideClass('hidenotcaught');
        }}
      />
      <label style={{ paddingRight: '0.5rem' }} htmlFor="caught">
        Caught
      </label>
      <input
        id="notcaught"
        type="radio"
        value="notcaught"
        name="chose1"
        onClick={() => {
          setHideClass('hidecaught');
        }}
      />
      <label style={{ paddingRight: '0.5rem' }} htmlFor="notcaught">
        Not Caught
      </label>
      <input
        id="all"
        type="radio"
        value="all"
        name="chose1"
        onClick={() => {
          setHideClass('');
        }}
      />
      <label htmlFor="all">All</label>
    </form>
  );
}

export default FilterRadio;
