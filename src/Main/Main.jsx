import "./style.css";
import * as info from './info'
import Card from "../Card/Card";

export default function Main({ newModal, newDeleteModal }) {
    return (
        <main>
            <div className="content">
                <div className="row">
                    <div className="results filter">
                        {info.genres.map(item =>
                            <div key={item.id}>
                                <input className="radio" name="genre" type="radio" key={item.id} defaultChecked={item.id == 0} />
                                {item.name}
                            </div>
                        )}
                    </div>
                    <div className="results sort">
                        <p>SORT BY</p>
                        <div>
                            {info.sortBy.map(item => <div key={item.id} >{item.name}</div>)}
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
                    {info.movies.map(item => <Card newModal={newModal} newDeleteModal={newDeleteModal} key={item.id} movie={item} />)}
                </div>
            </div>
        </main>
    );
}