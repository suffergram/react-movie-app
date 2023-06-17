export default function Tab({
  children,
  defaultChecked = false,
}: {
  children: string;
  defaultChecked?: boolean;
}) {
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
