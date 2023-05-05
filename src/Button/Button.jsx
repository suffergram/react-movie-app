import './style.css';

export default function Button({ children = '╳', ...delegatedProps }) {
  return (
    <button {...delegatedProps} type="button">
      {children}
    </button>
  );
}
