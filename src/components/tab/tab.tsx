import { useGetParams } from '../../hooks/use-get-params/use-get-params';
import { SearchParam } from '../../types/search-param';

interface TabProps {
  children: string;
  checked?: boolean;
}

export function Tab({ children, checked = false }: TabProps) {
  const [params, setSearchParams] = useGetParams();

  const handleClick = (value: string) => () => {
    const newParams = new URLSearchParams({
      ...params,
      [SearchParam.Filter]: value,
    });

    if (params[SearchParam.Offset]) newParams.set(SearchParam.Offset, '0');

    setSearchParams(newParams);
  };

  return (
    <div>
      <input
        className="radio"
        name={SearchParam.Filter}
        type="radio"
        value={children}
        checked={checked}
        onChange={handleClick(children)}
      />
      {children}
    </div>
  );
}
