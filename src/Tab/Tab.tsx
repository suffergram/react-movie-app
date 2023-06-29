import { useDispatch } from 'react-redux';

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
        onClick={() => dispatch({ type: 'handleFilter', payload: children })}
      />
      {children}
    </div>
  );
}
