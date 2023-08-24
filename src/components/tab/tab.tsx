import useGetParams from '../../hooks/use-get-params';
import SearchParam from '../../types/search-param';

interface TabProps {
  children: string;
  defaultChecked?: boolean;
}

export default function Tab({ children, defaultChecked = false }: TabProps) {
  const { setSearchParams, ...params } = useGetParams();

  const handleClick = (value: string) => () => {
    const newParams = new URLSearchParams({
      ...params,
      [SearchParam.Filter]: value,
    });
    setSearchParams(newParams);
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
