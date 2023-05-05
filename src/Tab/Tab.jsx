export default function Tab({ children, defaultChecked }) {
  return (
    <div>
      <input
        className="radio"
        name="genre"
        type="radio"
        value={children}
        {...{ defaultChecked }}
      />

      {children}
    </div>
  );
}
