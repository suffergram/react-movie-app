import { ChangeEvent } from 'react';
import useGetParams from '../../hooks/use-get-params';
import SearchParam from '../../types/search-param';

interface SortOption {
  id: number;
  name: string;
  displayLabel: string;
}

type SortSectionProps = {
  sort: SortOption[];
};

export default function SortSection({ sort }: SortSectionProps) {
  const { sortBy, setSearchParams } = useGetParams();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(window.location.search);
    params.set(SearchParam.SortBy, event.target.value);
    setSearchParams(params);
  };

  return (
    <div className="results sort">
      <p>SORT BY</p>

      <select onChange={handleChange} defaultValue={sortBy ?? 'release_date'}>
        {sort.map((item) => (
          <option key={item.id} value={item.name}>
            {item.displayLabel}
          </option>
        ))}

        {/* <div className="arrow">▼</div> */}
      </select>
    </div>
  );
}
