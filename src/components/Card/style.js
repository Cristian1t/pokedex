import styled from 'styled-components';

export const StyledRandomCard = styled.div`
  display: grid;
  justify-items: center;

  .cardwrapper {
    margin-top: 2rem;
    display: grid;
    justify-items: center;
  }
  .catchbutton {
    margin-top: 1rem;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    img {
      max-width: 1.5rem;
    }
    :hover {
      background: #fffacd;
    }
  }

  .catchallwrapper {
    display: grid;
    justify-items: center;
    img {
      margin-top: 2rem;
      max-width: 200px;
    }
    .catchallbutton {
      margin-top: 2rem;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 1.5rem;
      cursor: pointer;
      background: #f44336;
      border-radius: 1rem;
      :hover {
        background: grey;
        color: yellow;
      }
    }
  }
  .congrats {
    padding-top: 5rem;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .masterimg {
      max-width: 500px;
      padding-top: 2rem;
    }
  }
`;

export const StyledCard = styled.div`
  background: lightgrey;
  min-height: 250px;
  border: 1px solid black;
  border-radius: 8%;
  display: grid;
  min-width: 15rem;
  max-width: 15rem;
  :hover {
    background: #fffafa;
    color: #f44336;
  }
  .cardwrapper {
    display: grid;
    grid-template-rows: 1fr 0.2fr;
    justify-items: center;
    align-items: center;
    img {
      max-width: 150px;
    }
    .cardname {
      display: flex;
      font-weight: bold;
      text-transform: capitalize;
      :hover {
      }
      .capturedimg {
        max-width: 1.3rem;
      }
    }
  }
  .whocard {
    display: flex;
    justify-content: center;
    img {
      max-width: 150px;
      align-self: center;
    }
  }
`;
