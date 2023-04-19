export default function FoundMovieCounter({ number }) {
    return (
        <div className="results">
            <div><strong>{number}</strong> movies found</div>
        </div>
    );
}