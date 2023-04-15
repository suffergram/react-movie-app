export const genres = [
    { id : 0, name : 'all' },
    { id : 1, name : 'documentary' },
    { id : 2, name : 'comedy' },
    { id : 3, name : 'horror' },
    { id : 4, name : 'crime' },
];

export const sortBy = [
    { id : 0, name : 'release date' },
];

class Movie {
    constructor(id, name, year, genre, url) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.genre = genre;
        this.url = url;
    }
}

export const movies = [
    new Movie(0, 'The Witch', 2015, 'Drama, Fantasy, Horror', 'https://m.media-amazon.com/images/M/MV5BMTUyNzkwMzAxOF5BMl5BanBnXkFtZTgwMzc1OTk1NjE@._V1_FMjpg_UY6000_.jpg'),
    new Movie(1, 'The Lighthouse', 2019, 'Drama, Fantasy, Mystery', 'https://m.media-amazon.com/images/M/MV5BZmE0MGJhNmYtOWNjYi00Njc5LWE2YjEtMWMxZTVmODUwMmMxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1013_.jpg'),
    new Movie(2, 'The Northman', 2022, 'Action, Adventure, Drama', 'https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_FMjpg_UY2048_.jpg'),
    new Movie(3, 'Inception', 2010, 'Action, Adventure, Sci-Fi', 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX700_.jpg'),
    new Movie(4, 'Interstellar', 2014, 'Adventure, Drama, Sci-Fi', 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UY3600_.jpg'),
    new Movie(5, 'Tenet', 2020, 'Action, Sci-Fi, Thriller', 'https://m.media-amazon.com/images/M/MV5BMzU3YWYwNTQtZTdiMC00NjY5LTlmMTMtZDFlYTEyODBjMTk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1012_.jpg'),
];

