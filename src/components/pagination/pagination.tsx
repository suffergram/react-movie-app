import { useSelector } from 'react-redux';
import { RootState } from '../../types/root-state';
import { LOAD_MOVIES_AMOUNT } from '../../state/constants';
import { useGetParams } from '../../hooks/use-get-params/use-get-params';
import { SearchParam } from '../../types/search-param';
import { PaginateContainer, Paginate } from './style';

type HandlePageChangeProps = {
  selected: number;
};

export function Pagination() {
  const [params, setSearchParams] = useGetParams();

  const stateMoviesTotalAmount = useSelector(
    (state: RootState) => state.movieState.totalAmount
  );

  const pageCount = Math.ceil(stateMoviesTotalAmount / LOAD_MOVIES_AMOUNT);

  const handlePageChange = ({ selected }: HandlePageChangeProps) => {
    const newParams = new URLSearchParams({
      ...params,
      [SearchParam.Offset]: selected.toString(),
    });
    setSearchParams(newParams);
  };

  return (
    <PaginateContainer>
      <Paginate
        forcePage={Number(params[SearchParam.Offset] ?? 0)}
        pageCount={pageCount}
        breakLabel="..."
        onPageChange={handlePageChange}
        pageRangeDisplayed={4}
        previousLabel="<<"
        nextLabel=">>"
        renderOnZeroPageCount={null}
      />
    </PaginateContainer>
  );
}
