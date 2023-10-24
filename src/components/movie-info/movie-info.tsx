'use client';

import { useRouter } from 'next/navigation';
import { Movie } from '../../types/movie';
import { Logo } from '../logo/logo';
import { calculateDuration } from '../../utils/utils';
import { SearchIcon } from '../search-icon/search-icon';
import {
  Container,
  Content,
  Header,
  StyledButton,
  MovieData,
  ImageContainer,
  StyledImage,
  MovieTitle,
  Title,
  Rating,
  Genre,
  MovieSpecs,
  Description,
} from './style';

export function MovieInfo({ movie }: { movie: Movie }) {
  const duration = calculateDuration(movie?.runtime);
  const { back } = useRouter();

  const handleClick = () => back();

  return (
    <Container>
      <Content>
        <Header>
          <Logo />
          <StyledButton aria-label="search-button" onClick={handleClick}>
            <SearchIcon />
          </StyledButton>
        </Header>
        <MovieData>
          <ImageContainer>
            <StyledImage src={movie.poster_path} alt={movie.title} />
          </ImageContainer>
          <div>
            <MovieTitle>
              <Title>{movie?.title}</Title>
              <Rating>{movie?.vote_average}</Rating>
            </MovieTitle>
            <Genre>{movie?.genres.join(', ')}</Genre>
            <MovieSpecs>
              <p>{movie?.release_date.slice(0, 4)}</p>
              <p>{duration}</p>
            </MovieSpecs>
            <Description>{movie?.overview}</Description>
          </div>
        </MovieData>
      </Content>
    </Container>
  );
}
