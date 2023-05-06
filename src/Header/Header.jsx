import "./style.css";
import Button from "../Button/Button";
import MovieInfo from "../MovieInfo/MovieInfo";

export default function Header({ newModal, isMovieInfoOpen, onCloseMovieInfo, movie }) {
    const handleClick = () => {
        newModal('add')
    }

    return (
        <header>
            <div className="header-content">
                <p className="logo logo-pos"><strong>netflix</strong>roulette</p>
                <Button onClick={handleClick} className="add" >+ add movie</Button>
                <div>
                    <h1>FIND YOUR MOVIE</h1>
                    <div className="search-line">
                        <input placeholder="What do you want to watch?"></input>
                        <Button className="confirm">search</Button>
                    </div>
                </div>
            </div>
            <div className="header-background"><div></div></div>
            {isMovieInfoOpen ? <MovieInfo movie={movie} onCloseMovieInfo={onCloseMovieInfo} /> : null}
        </header>
    );
}