import useGetParams from '../../hooks/use-get-params';

interface TabProps {
  children: string;
  defaultChecked?: boolean;
}

export default function Tab({ children, defaultChecked = false }: TabProps) {
  const { setSearchParams } = useGetParams();

  const handleClick = (value: string) => () =>
    setSearchParams((params) => {
      params.set('filter', value);
      return params;
    });

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
