import styled from 'styled-components';

export const UserProfileStyle = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  h1 {
    color: black;
  }

  > button {
    width: 200px;
    padding: 5px 0;
  }
  
  form{
    display: flex;
    flex-direction: column;

  }

`

export const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    padding: 10px;
    border-radius: 7px;
    p {

    span {
      font-weight: 700;
    }
}
`

export const TextField = styled.div`
  display: flex;
  gap: 10px;
`

export const TextFieldToUpdatedHonor = styled.div`
  display: flex;
  gap: 15px;
  height: 17px;



  button {
    font-size: 0.7rem;
  }
`