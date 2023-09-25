import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 1200px;
  box-sizing: border-box;
  padding: 0 60px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
`;

export const StyledHorizontalRule = styled.hr`
  margin: 0;
  border: none;
  border-top: 2px solid var(--color-2);
  border-bottom: 2px solid black;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 55px;
`;
