import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import RootState from '../../types/root-state';
import { LOAD_MOVIES_AMOUNT } from '../../state/constants';
import useGetParams from '../../hooks/use-get-params';
import './style.css';

export default function Pagination() {
  const { offset, setSearchParams } = useGetParams();

  const stateMoviesTotalAmount = useSelector(
    (state: RootState) => state.movieState.totalAmount
  );

  const pageCount = Math.ceil(stateMoviesTotalAmount / LOAD_MOVIES_AMOUNT);

  const handlePageChange = (selected: number) =>
    setSearchParams((params) => {
      params.set('offset', selected.toString());
      return params;
    });

  return (
    <div className="pagination">
      <ReactPaginate
        className="pagination-container"
        initialPage={offset}
        pageCount={pageCount}
        breakLabel="..."
        onPageChange={({ selected }) => handlePageChange(selected)}
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
