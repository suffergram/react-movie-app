import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  align-items: center;
  padding-left: 2.6em;
  width: calc(100% - 2.6em);
  height: 46px;
  color: var(--color-white);
  cursor: pointer;
  text-transform: uppercase;
`;

export const StyledInput = styled.input`
  appearance: none;
  position: absolute;
  padding: 0;

  &:checked {
    + {
      span {
        background-color: var(--color-1);
      }
    }
  }
`;

export const StyledCheckbox = styled.span`
  position: absolute;
  width: 1em;
  height: 1em;
  background-color: var(--color-white);
  margin-left: -1.4em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.15em;
`;

export const StyledCheck = styled.div`
  width: 0.5em;
  height: 0.2em;
  border-left: 3px solid var(--color-white);
  border-bottom: 3px solid var(--color-white);
  transform: rotate(-45deg);
  margin-bottom: 0.2em;
  margin-right: 0.05em;
`;
