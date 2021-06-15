import styled from 'styled-components';

export const StyledSearch = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;

  .topcollection {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;
    .searchinput {
      font-size: 1.5rem;
    }
  }
  .middlecollection {
    padding: 0.5rem;
    display: flex;
    justify-content: space-around;
  }
  .botcollection {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(auto-fit, 15rem);
    justify-content: center; */
  }
`;
