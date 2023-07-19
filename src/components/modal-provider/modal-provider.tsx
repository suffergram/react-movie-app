import { useState, useCallback, useMemo, PropsWithChildren } from 'react';
import { Movie } from '../../types/movie';
import MovieModal from '../movie-modal/movie-modal';
import DeleteModal from '../delete-modal/delete-modal';
import CongratModal from '../congrat-modal/congrat-modal';
import AppContext from '../app-context/app-context';

export default function ModalProvider({ children }: PropsWithChildren) {
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isCongratModalOpen, setIsCongratModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isMovieInfoOpen, setIsMovieInfoOpen] = useState(false);

  const handleMovieModalOpen = useCallback((name: string) => {
    setModalType(name);
    setIsMovieModalOpen(true);
  }, []);

  const handleMovieInfoOpen = useCallback((currentMovie: Movie) => {
    setIsMovieInfoOpen(true);
    setMovie(currentMovie);
  }, []);

  const appContextValue = useMemo(
    () => ({
      isMovieModalOpen,
      handleMovieModalOpen,
      handleMovieModalClose: () => setIsMovieModalOpen(false),
      isDeleteModalOpen,
      handleDeleteModalOpen: () => setIsDeleteModalOpen(true),
      handleDeleteModalClose: () => setIsDeleteModalOpen(false),
      isCongratModalOpen,
      handleCongratModalOpen: () => setIsCongratModalOpen(true),
      handleCongratModalClose: () => setIsCongratModalOpen(false),
      isMovieInfoOpen,
      handleMovieInfoOpen,
      handleMovieInfoClose: () => setIsMovieInfoOpen(false),
      modalType,
      movie,
    }),
    [
      isMovieModalOpen,
      handleMovieModalOpen,
      isDeleteModalOpen,
      isCongratModalOpen,
      isMovieInfoOpen,
      handleMovieInfoOpen,
      modalType,
      movie,
    ]
  );

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
      <MovieModal isModalOpen={isMovieModalOpen} title={`${modalType} movie`} />
      <DeleteModal isModalOpen={isDeleteModalOpen} />
      <CongratModal isModalOpen={isCongratModalOpen} />
    </AppContext.Provider>
  );
}
