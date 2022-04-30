import styled from 'styled-components';

export const HeaderStyle = styled.header`
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
  padding: 20px;
  background-color: #272727 !important;
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;

  nav {
    display: flex;
    gap: 20px;
  }

  nav a {
    color: #f6f4e6;
    text-decoration: none;
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 500;
    display: inline-block;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

nav a:hover {
  color: #fddb3a;
}

nav a:hover {
  color: #fddb3a;
}

nav div {
  width: 6px;
  height: 6px;
  background: #fddb3a;
  border-radius: 50%;
  opacity: 0;
  -webkit-transform: translateX(30px);
  transform: translateX(30px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

`
