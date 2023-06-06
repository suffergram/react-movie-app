import {
  useState,
  useCallback,
  useMemo,
  PropsWithChildren,
} from 'react';
import { Movie } from '../Types/MovieTypes';
import MovieModal from '../MovieModal/MovieModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import AppContext from '../AppContext/AppContext';

export default function ModalProvider({ children }:PropsWithChildren) {
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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

  const appContextValue = useMemo(() => ({
    isMovieModalOpen,
    handleMovieModalOpen,
    handleMovieModalClose: () => setIsMovieModalOpen(false),
    isDeleteModalOpen,
    handleDeleteModalOpen: () => setIsDeleteModalOpen(true),
    handleDeleteModalClose: () => setIsDeleteModalOpen(false),
    isMovieInfoOpen,
    handleMovieInfoOpen,
    handleMovieInfoClose: () => setIsMovieInfoOpen(false),
    modalType,
    movie,
  }), [
    isMovieModalOpen,
    handleMovieModalOpen,
    isDeleteModalOpen,
    isMovieInfoOpen,
    handleMovieInfoOpen,
    modalType,
    movie,
  ]);

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
      <MovieModal
        isModalOpen={isMovieModalOpen}
        title={`${modalType} movie`}
      />
      <DeleteModal
        isModalOpen={isDeleteModalOpen}
      />
    </AppContext.Provider>
  );
}
