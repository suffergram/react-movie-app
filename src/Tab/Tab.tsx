import { useDispatch } from 'react-redux';
import { handleFilterAction } from '../state/reducerActions';

interface TabProps {
  children: string;
  defaultChecked?: boolean;
}

export default function Tab({ children, defaultChecked = false }: TabProps) {
  const dispatch = useDispatch();

  const handleClick = (value: string) => () =>
    dispatch(handleFilterAction(value));

  return (
    <div>
      <input
        className="radio"
        name="genre"
        type="radio"
        value={children}
        defaultChecked={defaultChecked}
        onClick={handleClick(children)}
      />
      {children}
    </div>
  );
}
