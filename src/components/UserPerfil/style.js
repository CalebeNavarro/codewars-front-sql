import styled from 'styled-components';

export const UserProfileStyle = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: black;
  }

  main > {
    display: flex;
    justify-content: center;
    flex-direction: column;

    div {
      display: flex;
      gap: 15px;

      button {
        border: black 1px solid;
      }
    }
  }
`