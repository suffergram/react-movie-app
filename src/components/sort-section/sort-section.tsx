import { useDispatch } from 'react-redux';
import { ChangeEvent } from 'react';
import { handleSortAction } from '../../state/action-creators';

interface SortOption {
  id: number;
  name: string;
  displayLabel: string;
}

type SortSectionProps = {
  sort: SortOption[];
};

export default function SortSection({ sort }: SortSectionProps) {
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(handleSortAction(event.target.value));
  };

  return (
    <div className="results sort">
      <p>SORT BY</p>

      <select onChange={(event) => handleChange(event)}>
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
