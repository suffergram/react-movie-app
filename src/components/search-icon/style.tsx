import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  transform: rotate(-45deg);
  margin-left: -11px;
  margin-bottom: -2px;
`;

export const Circle = styled.div`
  width: 21px;
  height: 21px;
  border: 2px solid var(--color-1);
  border-radius: 50%;
  margin-left: 1px;
  box-sizing: border-box;
`;

export const Line = styled.div`
  width: 15px;
  height: 0;
  border: 1px solid var(--color-1);
  box-sizing: border-box;
`;
