import styled from 'styled-components';

export const Circle = styled.div`
  width: 66px;
  height: 66px;
  background-color: var(--color-1);
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 31px;
`;

export const Check = styled.div`
  width: 36px;
  height: 14px;
  border-left: 5px solid var(--color-white);
  border-bottom: 5px solid var(--color-white);
  transform: rotate(-45deg);
  margin-bottom: 8px;
`;
