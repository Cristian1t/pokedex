import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  background: white;
  border-bottom: 3px solid black;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    font-size: 2rem;
    list-style: none;
    li {
      padding: 1rem;
      a {
        text-transform: uppercase;
        text-decoration: none;
        color: black;
        padding: 1rem;
        :hover {
          background: #f44336;
        }
      }
    }
  }
`;
