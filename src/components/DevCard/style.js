import styled from 'styled-components';

export const UlStyle = styled.ul`
  display: flex;
  padding: 5px;
  gap: 10px;
  width: 400px;
  padding: 10px;
  border-radius: 7px;
  /* background: linear-gradient(to right, var(--color-second), var(--soft-white)); */
  background-color: var(--color-second);
  opacity: 0.9;


  li{
    color: white;
    font-weight: 700;
  }
  /* li:nth-child(1){
    width: 25px;
  } */
  li:nth-child(2){
    flex-grow: 1;
  }

  transition: 0.2s;
  :hover {
    transition: 0s;
    opacity: 1;
    cursor:pointer;
  }

`