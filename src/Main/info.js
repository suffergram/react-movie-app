export const genres = [
    'all',
    'documentary',
    'comedy',
    'horror',
    'crime',
];

export const sortBy = [
    'release date',
];

class Movie {
    constructor(name, year, genre, url) {
        this.name = name;
        this.year = year;
        this.genre = genre;
        this.url = url;
    }
}

export const movies = [
    new Movie('The Witch', 2015, 'Drama, Fantasy, Horror', 'https://m.media-amazon.com/images/M/MV5BMTUyNzkwMzAxOF5BMl5BanBnXkFtZTgwMzc1OTk1NjE@._V1_FMjpg_UY6000_.jpg'),
    new Movie('The Lighthouse', 2019, 'Drama, Fantasy, Mystery', 'https://m.media-amazon.com/images/M/MV5BZmE0MGJhNmYtOWNjYi00Njc5LWE2YjEtMWMxZTVmODUwMmMxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1013_.jpg'),
    new Movie('The Northman', 2022, 'Action, Adventure, Drama', 'https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_FMjpg_UY2048_.jpg'),
    new Movie('Inception', 2010, 'Action, Adventure, Sci-Fi', 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX700_.jpg'),
    new Movie('Interstellar', 2014, 'Adventure, Drama, Sci-Fi', 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UY3600_.jpg'),
    new Movie('Tenet', 2020, 'Action, Sci-Fi, Thriller', 'https://m.media-amazon.com/images/M/MV5BMzU3YWYwNTQtZTdiMC00NjY5LTlmMTMtZDFlYTEyODBjMTk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1012_.jpg'),
];

