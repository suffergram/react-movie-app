import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import MovieModal from '../MovieModal/MovieModal';
import DeleteModal from '../DeleteModal/DeleteModal';

export default function App() {
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const [isMovieInfoOpen, setIsMovieInfoOpen] = useState(false);
  const [movie, setMovie] = useState(null);

  const handleMovieModalOpen = (name) => {
    setModalType(name);
    setIsMovieModalOpen(true);
  };

  const handleMovieModalClose = () => setIsMovieModalOpen(false);

  const handleDeleteModalOpen = () => setIsDeleteModalOpen(true);

  const handleDeleteModalClose = () => setIsDeleteModalOpen(false);

  const handleMovieInfoOpen = (currentMovie) => {
    setIsMovieInfoOpen(true);
    setMovie(currentMovie);
  };

  const handleMovieInfoClose = () => setIsMovieInfoOpen(false);

  return (
    <>
      <Header
        onMovieModalOpen={handleMovieModalOpen}
        onMovieInfoClose={handleMovieInfoClose}
        isMovieInfoOpen={isMovieInfoOpen}
        movie={movie}
      />
      <Main
        onMovieModalOpen={handleMovieModalOpen}
        onDeleteModalOpen={handleDeleteModalOpen}
        onMovieInfoOpen={handleMovieInfoOpen}
      />
      <Footer />
      <MovieModal
        onModalClose={handleMovieModalClose}
        isModalOpen={isMovieModalOpen}
        title={`${modalType} movie`}
      />
      <DeleteModal
        onModalClose={handleDeleteModalClose}
        isModalOpen={isDeleteModalOpen}
      />
    </>
  );
}
