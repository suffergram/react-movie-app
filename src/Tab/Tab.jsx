export default function Tab({ children, ...delegatedProps }) {
    return (
        <div>
            <input className="radio" name="genre" value={children} type="radio" {...delegatedProps} />
            {children}
        </div> 
    );
}