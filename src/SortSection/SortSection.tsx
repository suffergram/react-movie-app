import { useDispatch } from 'react-redux';
import { handleSortAction } from '../state/reducerActions';

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

  return (
    <div className="results sort">
      <p>SORT BY</p>

      <select onChange={(e) => dispatch(handleSortAction(e.target.value))}>
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
