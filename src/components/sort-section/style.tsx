import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  float: right;
  gap: 30px;
`;

export const StyledParagraph = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-5);
  opacity: 0.5;
`;

export const StyledSelect = styled.select`
  text-transform: uppercase;
  font-size: 16px;
  background: none;
  border: none;
  color: var(--color-5);
  outline: none;
  width: 159px;
`;

export const StyledOption = styled.option`
  background-color: var(--color-2);
`;
