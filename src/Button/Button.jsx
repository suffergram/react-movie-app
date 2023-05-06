import './style.css'

export default function Button({ children = "╳", ...delegatedProps }) {
    return (
        <button {...delegatedProps}>
            {children}
        </button>
    );
}