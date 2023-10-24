import styled from 'styled-components';

export const StyledTab = styled.div`
  text-transform: uppercase;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  margin: 0;
  appearance: none;
  cursor: pointer;

  &[aria-checked='true'],
  &:hover {
    box-shadow: 0 4px 0 0 var(--color-1);
  }
`;
