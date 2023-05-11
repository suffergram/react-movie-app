const defaultProps = {
  defaultChecked: false,
};

export default function Tab(
  { children, defaultChecked = false }:
  { children: string, defaultChecked?: boolean } & typeof defaultProps,
) {
  return (
    <div>
      <input
        className="radio"
        name="genre"
        type="radio"
        value={children}
        defaultChecked={defaultChecked}
      />

      {children}
    </div>
  );
}

Tab.defaultProps = defaultProps;
