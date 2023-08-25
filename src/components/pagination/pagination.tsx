import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import RootState from '../../types/root-state';
import { LOAD_MOVIES_AMOUNT } from '../../state/constants';
import useGetParams from '../../hooks/use-get-params';
import SearchParam from '../../types/search-param';
import './style.css';

type HandlePageChangeProps = {
  selected: number;
};

export default function Pagination() {
  const { setSearchParams, ...params } = useGetParams();

  const stateMoviesTotalAmount = useSelector(
    (state: RootState) => state.movieState.totalAmount
  );

  const pageCount = Math.ceil(stateMoviesTotalAmount / LOAD_MOVIES_AMOUNT);

  const handlePageChange = ({ selected }: HandlePageChangeProps) => {
    const newParams = new URLSearchParams({
      ...Object.fromEntries(
        Object.entries(params).filter(([, value]) => value !== null)
      ),
      [SearchParam.Offset]: selected.toString(),
    });
    setSearchParams(newParams);
  };

  return (
    <div className="pagination">
      <ReactPaginate
        className="pagination-container"
        initialPage={Number(params.offset ?? 0)}
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
