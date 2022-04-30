import styled from 'styled-components';

interface ButtonProps {
  readonly target: string;
}

export const ButtonStyle = styled.button<ButtonProps>`
  padding: 8px;
  background-color: ${props => props.target === 'true' ? 'orange' : 'var(--color-primary)'};
  border: 1px;
  opacity: 0.9;
  font-size: 1rem;
  
  :hover {
    opacity: 1;
    box-shadow: 0px 3px 0px var(--color-third);
  }
`