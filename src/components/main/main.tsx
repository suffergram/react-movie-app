import { Card } from '../card/card';
import { GenreSection } from '../genre-section/genre-section';
import { SortSection } from '../sort-section/sort-section';
import { FoundMovieCounter } from '../found-movie-counter/found-movie-counter';
import * as info from './info';
import { useLoadMovies } from '../../hooks/use-load-movies/use-load-movies';
import { Movie } from '../../types/movie';
import { Pagination } from '../pagination/pagination';
import { StyledMain, Content, Row, StyledHorizontalRule, Grid } from './style';

export function Main() {
  const { isLoading, error, movies, totalAmount } = useLoadMovies();

  return (
    <StyledMain>
      <Content>
        <Row>
          <GenreSection genres={info.genres} />
          <SortSection sort={info.sortBy} />
        </Row>
        <StyledHorizontalRule />
        <Row>
          <FoundMovieCounter amount={totalAmount} />
        </Row>
        <Grid>
          {!isLoading &&
            !error &&
            movies.map((item: Movie) => <Card key={item.id} movie={item} />)}
        </Grid>
        <Pagination />
      </Content>
    </StyledMain>
  );
}
