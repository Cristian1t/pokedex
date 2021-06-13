import styled from 'styled-components';

export const StyledSearch = styled.div`
  display: grid;
  grid-template-rows: auto auto;

  .topcollection {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;
    .searchinput {
      font-size: 1.5rem;
    }
    .unlockbutton {
      border: none;
      color: white;
      padding: 1rem 3rem;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 1rem;
      cursor: pointer;
      background: #f44336;
      :hover {
        background: grey;
        color: gold;
      }
    }
  }
  .botcollection {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 1rem;
  }
`;
