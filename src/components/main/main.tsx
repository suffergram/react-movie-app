'use client';

import { Suspense } from 'react';
import { Card } from '../card/card';
import { GenreSection } from '../genre-section/genre-section';
import { SortSection } from '../sort-section/sort-section';
import { FoundMovieCounter } from '../found-movie-counter/found-movie-counter';
import { tabGenres, sortBy } from './info';
import { Movie } from '../../types/movie';
import { Pagination } from '../pagination/pagination';
import { MoviesDTO } from '../../types/movies-dto';
import { StyledMain, Content, Row, StyledHorizontalRule, Grid } from './style';

export function Main(props: MoviesDTO) {
  const movieData = props;

  return (
    <StyledMain>
      <Content>
        <Row>
          <GenreSection genres={tabGenres} />
          <SortSection sort={sortBy} />
        </Row>
        <StyledHorizontalRule />
        <Row>
          {movieData.totalAmount ? (
            <FoundMovieCounter amount={movieData.totalAmount} />
          ) : undefined}
        </Row>
        <Suspense>
          <Grid>
            {movieData.data?.map((item: Movie) => (
              <Card key={item.id} movie={item} />
            ))}
          </Grid>
        </Suspense>
        <Pagination amount={movieData.totalAmount} />
      </Content>
    </StyledMain>
  );
}
