import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{ $variant?: string }>`
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;
  height: 57px;
  width: 180px;
  font-size: 20px;

  ${(props) => {
    switch (props.$variant) {
      case 'primary':
        return css`
          color: var(--color-white);
          background-color: var(--color-1);
        `;
      case 'secondary':
        return css`
          color: var(--color-1);
          border: 1px solid var(--color-1);
          background-color: transparent;
        `;
      case 'add':
        return css`
          background-color: rgba(85, 85, 85, 0.75);
          color: var(--color-1);
        `;
      default:
        return css``;
    }
  }}
`;
