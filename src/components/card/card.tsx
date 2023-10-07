import { useContext, memo } from 'react';
import Link from 'next/link';
import { Popover } from '../popover/popover';
import { ModalContext } from '../../context/modal-context';
import { Movie } from '../../types/movie';
import { ModalState } from '../../types/modal-state';
import {
  StyledCard,
  ImageContainer,
  StyledImage,
  Description,
  Year,
  Title,
  Genre,
  PopoverButton,
} from './style';

type CardProps = {
  movie: Movie;
};

export const Card = memo(({ movie }: CardProps) => {
  const { handleModalOpen } = useContext(ModalContext);

  const handleDeleteModalOpen = () => {
    handleModalOpen({
      name: ModalState.Delete,
      data: movie,
    });
  };

  const handleEditModalOpen = () => {
    handleModalOpen({
      name: ModalState.Edit,
      data: movie,
    });
  };

  return (
    <StyledCard>
      <Link href={`movies/${movie.id}`}>
        <ImageContainer>
          <StyledImage src={movie.poster_path} alt={movie.title} />
        </ImageContainer>
        <Description>
          <Year>{movie.release_date.slice(0, 4)}</Year>
          <Title>{movie.title}</Title>
          <Genre>{movie.genres.join(', ')}</Genre>
        </Description>
      </Link>
      <Popover>
        <PopoverButton onClick={handleEditModalOpen}>edit</PopoverButton>
        <PopoverButton onClick={handleDeleteModalOpen}>delete</PopoverButton>
      </Popover>
    </StyledCard>
  );
});
