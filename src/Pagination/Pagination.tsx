import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import StateType from '../Types/StateType';
import './style.css';

export default function Pagination() {
  const dispatch = useDispatch();

  const stateMoviesTotalAmount = useSelector(
    (state: StateType) => state.totalAmount
  );

  const pageCount = Math.ceil(stateMoviesTotalAmount / 9);

  return (
    <div className="pagination">
      <ReactPaginate
        className="pagination-container"
        pageCount={pageCount}
        breakLabel="..."
        onPageChange={({ selected }) => {
          dispatch({ type: 'handleOffset', payload: selected }); // TODO: fix this 'selected' variable
        }}
        pageRangeDisplayed={4}
        previousLabel="<<"
        nextLabel=">>"
        renderOnZeroPageCount={null}
        breakClassName="pagination-item"
        pageLinkClassName="pagination-item"
        previousLinkClassName="pagination-item"
        nextLinkClassName="pagination-item"
      />
    </div>
  );
}
