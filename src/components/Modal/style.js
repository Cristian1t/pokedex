import styled from 'styled-components';

export const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  .wrapper {
    color: black;
    margin: 2rem auto;
    width: 20%;
    display: grid;
    max-width: 300px;
    grid-template-rows: 1fr 0.5fr;
    .image {
      border: 6px solid gold;
      padding: 2rem;
      margin: 0 auto;
      display: block;
      width: 74.8%;
      max-width: 300px;
      background: #fffacd;
    }
    .description {
      text-transform: capitalize;
      padding-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: white;
      min-width: 300px;
      .pokemon-name {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 2rem;
        :hover {
        }
        .capturedimg {
          padding-left: 0.5rem;
          max-width: 1.5rem;
        }
      }
      .pokemon-ability {
        padding: 0.5rem 0;
      }
      .moves {
        margin-bottom: 1rem;
        border: 1px solid black;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .moveslable {
          padding-right: 1rem;
          font-weight: bold;
        }
      }
    }
  }
`;
