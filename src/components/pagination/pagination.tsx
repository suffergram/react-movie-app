import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import RootState from '../../types/root-state';
import { LOAD_MOVIES_AMOUNT } from '../../state/constants';
import useGetParams from '../../hooks/use-get-params';
import SearchParam, { OFFSET } from '../../types/search-param';
import './style.css';

type HandlePageChangeProps = {
  selected: number;
};

export default function Pagination() {
  const { offset, setSearchParams } = useGetParams();

  const stateMoviesTotalAmount = useSelector(
    (state: RootState) => state.movieState.totalAmount
  );

  const pageCount = Math.ceil(stateMoviesTotalAmount / LOAD_MOVIES_AMOUNT);

  const handlePageChange = ({ selected }: HandlePageChangeProps) => {
    const params = new URLSearchParams(window.location.search);
    params.set(SearchParam.Offset, (selected + OFFSET).toString());
    setSearchParams(params);
  };

  return (
    <div className="pagination">
      <ReactPaginate
        className="pagination-container"
        initialPage={offset}
        pageCount={pageCount}
        breakLabel="..."
        onPageChange={handlePageChange}
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
