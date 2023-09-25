import styled from 'styled-components';

export const StyledMenuButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
  text-align: center;
  display: none;
  background-color: var(--color-3);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  padding: 0;
  border: none;
  cursor: pointer;
`;

export const Menu = styled.div`
  width: 190px;
  height: 111px;
  background-color: var(--color-3);
  border-radius: 4px;
`;

export const MenuCloseButton = styled.div`
  float: right;
  margin: 8px;
  width: 12px;
  height: 12px;
  font-size: 12px;
  cursor: pointer;
`;
