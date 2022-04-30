import styled from 'styled-components';

export const HomeStyle = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: var(--background-primary);  /* fallback for old browsers */


  button {
    padding: 20px 30px;
    border-radius: 7px;
    text-transform: uppercase;
    background-color: var(--color-primary);
    border: 2px solid var(--color-second);
    font-size: 1.5rem;

    :hover {
      border: 2px solid var(--color-primary);
      background-color: var(--color-third);
      color: var(--color-primary);
    }
  }
`

export const DivStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 47vh;
`