import './style.css'

export default function Button({ onButtonClick, className, text }) {
    return (
        <button 
        onClick={onButtonClick ? onButtonClick : null} 
        className={className ? className : null}>
            {text ? text : "╳"}
        </button>
    );
}