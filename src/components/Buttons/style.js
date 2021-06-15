import styled from 'styled-components';

export const StyledUnlockButton = styled.button`
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
`;

export const StyledRestartButton = styled(StyledUnlockButton)`
  color: black;
  background: white;
  border: 1px solid black;
`;
