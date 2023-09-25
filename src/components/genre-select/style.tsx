import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledInput = styled.input<{ $error?: boolean }>`
  width: 100%;
  background-color: var(--color-form-input);
  display: flex !important;
  align-items: center;
  padding: 16px;
  color: var(--color-white);
  font-size: 20px;
  text-transform: capitalize;
  box-sizing: border-box;
  cursor: pointer;
  border: none;

  ${(props) => {
    if (props.$error)
      return css`
        outline: 1px solid var(--color-1);
      `;
    return css``;
  }}
`;

export const SelectOptionContainer = styled.div<{ $offset?: number }>`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: var(--color-3);
  z-index: 10;
  top: ${(props) => props.$offset ?? 57}px;
`;
