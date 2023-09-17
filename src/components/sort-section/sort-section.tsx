import { ChangeEvent } from 'react';
import { useGetParams } from '../../hooks/use-get-params/use-get-params';
import { SearchParam } from '../../types/search-param';

interface SortOption {
  id: number;
  name: string;
  displayLabel: string;
}

type SortSectionProps = {
  sort: SortOption[];
};

export function SortSection({ sort }: SortSectionProps) {
  const [params, setSearchParams] = useGetParams();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newParams = new URLSearchParams({
      ...params,
      [SearchParam.SortBy]: event.target.value,
    });
    setSearchParams(newParams);
  };

  return (
    <div className="results sort">
      <p>SORT BY</p>

      <select
        onChange={handleChange}
        value={params[SearchParam.SortBy] ?? 'release_date'}
      >
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
