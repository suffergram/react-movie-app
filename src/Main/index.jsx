import "./style.css";
import * as info from './info'
import Card from "../Card";
import Footer from "../Footer";

export default function Main() {
    return (
        <div className="main">
            <div className="content">
                <div className="row">
                    <div className="results filter">
                        {info.genres.map(item => <div>{item.toUpperCase()}</div>)}
                    </div>
                    <div className="results sort">
                        <p>SORT BY</p>
                        <div>
                            {info.sortBy.map(item => <div>{item.toUpperCase()}</div>)}
                            <div className="arrow">▼</div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="results">
                        <div><strong>39</strong> movies found</div>
                    </div>
                </div>
                <div className="found">
                    {
                        info.movies.map(item => <Card movie={item} />)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}