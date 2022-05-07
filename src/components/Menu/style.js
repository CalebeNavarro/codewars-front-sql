import styled from 'styled-components';

export const MenuStyled = styled.div`
  position: absolute;
  top: 7px;
  left: 30px;

summary {
  writing-mode: vertical-lr;
  text-align: center;
  padding: 8  px;
  background-color: var(--primColor);
  border: 2px solid var(--secoColor);
  border-radius: var(--cornerRad);
  color: var(--secoColor);
  cursor: pointer;
  user-select: none;
  outline: none;
  transition: transform 200ms ease-in-out 0s;
}
summary::before,
summary::after {
  position: static;
  top: 0;
  left: 0;
}
summary::before {
  content: "";
}
summary::after {
  font-size: 30px;
  content: "III";
  letter-spacing: -1px;
  color: gray;
}
summary:hover {
  transform: scale(1.1);
}
summary::marker {
  font-size: 0;
}
summary::-webkit-details-marker {
  display: none;
}
details[open] nav {
  animation-name: menuAnim;
}
details[open] summary::before {
  content: "X";
  color: gray;
}
details[open] summary::after {
  content: "";
}
nav {
  border-radius: var(--cornerRad);
  background-color: var(--primColor);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}
nav a {
  padding: 12px 24px;
  margin: 0 16px;
  color: var(--secoColor);
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  text-decoration: none;
  text-align: center;
  transition: filter 200ms linear 0s;
}
nav a:nth-of-type(1) {
  padding-top: 24px;
}
nav a:nth-last-of-type(1) {
  border-bottom: none;
}
nav a:hover {
  filter: brightness(200%);
}
details[open]::before {
  animation: fadeMe 300ms linear forwards;
}
@keyframes menuAnim {
  0% {
    height: 0;
  }
  100% {
    height: 312px;
  }
}
@keyframes fadeMe {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 0;
  }
}

`
