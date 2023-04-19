export default function SortSection({ sort }) {
    return (
        <div className="results sort">
            <p>SORT BY</p>
            <div>
                {sort.map(item => <div key={item.id} >{item.name}</div>)}
                <div className="arrow">▼</div>
            </div>
        </div>
    );
}