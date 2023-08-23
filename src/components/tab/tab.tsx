import useGetParams from '../../hooks/use-get-params';
import SearchParam from '../../types/search-param';

interface TabProps {
  children: string;
  defaultChecked?: boolean;
}

export default function Tab({ children, defaultChecked = false }: TabProps) {
  const { setSearchParams } = useGetParams();

  const handleClick = (value: string) => () => {
    const params = new URLSearchParams(window.location.search);
    params.set(SearchParam.Filter, value);
    setSearchParams(params);
  };

  return (
    <div>
      <input
        className="radio"
        name={SearchParam.Filter}
        type="radio"
        value={children}
        defaultChecked={defaultChecked}
        onClick={handleClick(children)}
      />
      {children}
    </div>
  );
}
