export const genres = [
    { id : 0, name : "documentary" },
    { id : 1, name : "comedy" },
    { id : 2, name : "horror" },
    { id : 3, name : "crime" },
    { id : 4, name : "drama" },
    { id : 5, name : "fantasy" },
    { id : 6, name : "mystery" },
    { id : 7, name : "action" },
    { id : 8, name : "adventure" },
    { id : 9, name : "sci-fi" },
    { id : 10, name : "thriller" },
];

export const sortBy = [
    { id : 0, name : 'release date' },
    { id : 1, name : 'rating' },
    { id : 2, name : 'name' },
];

class Movie {
    constructor(id, name, year, duration, rating, genre, url, description) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.duration = duration;
        this.rating = rating;
        this.genre = genre;
        this.url = url;
        this.description = description;
    }
}

export const movies = [
    new Movie(
        0, 
        'The Witch', 
        2015, 
        '1h 32min', 
        6.9, 
        'Drama, Fantasy, Horror', 
        'https://m.media-amazon.com/images/M/MV5BMTUyNzkwMzAxOF5BMl5BanBnXkFtZTgwMzc1OTk1NjE@._V1_FMjpg_UY6000_.jpg', 
        'New England, 1630: William and Katherine try to lead a devout Christian life, homesteading on the edge of an impassible wilderness, with five children. When their newborn son mysteriously vanishes and their crops fail, the family begins to turn on one another. "The Witch" is a chilling portrait of a family unraveling within their own sins, leaving them prey for an inconceivable evil.',
    ),
    new Movie(
        1, 
        'The Lighthouse', 
        2019, 
        '1h 49min', 
        7.4, 
        'Drama, Fantasy, Mystery', 
        'https://m.media-amazon.com/images/M/MV5BZmE0MGJhNmYtOWNjYi00Njc5LWE2YjEtMWMxZTVmODUwMmMxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1013_.jpg', 
        "As the wavering cry of the foghorn fills the air, the taciturn former lumberjack, Ephraim Winslow, and the grizzled lighthouse keeper, Thomas Wake, set foot in a secluded and perpetually grey islet off the coast of late-19th-century New England. For the following four weeks of back-breaking work and unfavourable conditions, the tight-lipped men will have no one else for company except for each other, forced to endure irritating idiosyncrasies, bottled-up resentment, and burgeoning hatred. Then, amid bad omens, a furious and unending squall maroons the pale beacon's keepers in the already inhospitable volcanic rock, paving the way for a prolonged period of feral hunger; excruciating agony; manic isolation, and horrible booze-addled visions. Now, the eerie stranglehold of insanity tightens. Is there an escape from the wall-less prison of the mind?",
    ),
    new Movie(
        2, 
        'The Northman', 
        2022, 
        '2h 17min', 
        7.1, 
        'Action, Adventure, Drama', 
        'https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_FMjpg_UY2048_.jpg', 
        "The Viking Age. With a mind aflame with hate and revenge, Prince Amleth, the wronged son of King Aurvandill War-Raven, heads to cold, windswept Iceland to retrieve what was stolen from him: a father, a mother, and a kingdom. And like a war dog picking up the enemy's scent, brutal Amleth embarks on a murderous quest to find the hateful adversary, whose life is forever woven together with his by the threads of fate. Now, in the name of Valhalla, no one can stop the Northman, not even God."
    ),
    new Movie(
        3, 
        'Inception', 
        2010, 
        '2h 28min', 
        8.8, 
        'Action, Adventure, Sci-Fi', 
        'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX700_.jpg', 
        "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
    ),
    new Movie(
        4, 
        'Interstellar', 
        2014, 
        '2h 49min', 
        8.6, 
        'Adventure, Drama, Sci-Fi', 
        'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UY3600_.jpg', 
        "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.",    
    ),
    new Movie(
        5, 
        'Tenet', 
        2020, 
        '2h 30min', 
        7.3, 
        'Action, Sci-Fi, Thriller', 
        'https://m.media-amazon.com/images/M/MV5BMzU3YWYwNTQtZTdiMC00NjY5LTlmMTMtZDFlYTEyODBjMTk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1012_.jpg', 
        'In a twilight world of international espionage, an unnamed CIA operative, known as The Protagonist, is recruited by a mysterious organization called Tenet to participate in a global assignment that unfolds beyond real time. The mission: prevent Andrei Sator, a renegade Russian oligarch with precognition abilities, from starting World War III. The Protagonist will soon master the art of "time inversion" as a way of countering the threat that is to come.',    
    ),
];

