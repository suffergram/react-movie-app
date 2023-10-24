import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const PaginateContainer = styled.div`
  width: 100%;
  height: 70px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Paginate = styled(ReactPaginate)`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0;

  li {
    margin: 10px;
    height: 44px;
    aspect-ratio: 1 / 1;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid var(--color-4);
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    align-items: center;
    user-select: none;

    a {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  li.selected {
    color: var(--color-1);
  }
`;
