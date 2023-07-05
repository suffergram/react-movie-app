import { useDispatch } from 'react-redux';
import { handleFilterAction } from '../state/reducerActions';

export default function Tab({
  children,
  defaultChecked = false,
}: {
  children: string;
  defaultChecked?: boolean;
}) {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        className="radio"
        name="genre"
        type="radio"
        value={children}
        defaultChecked={defaultChecked}
        onClick={() => dispatch(handleFilterAction(children))}
      />
      {children}
    </div>
  );
}
