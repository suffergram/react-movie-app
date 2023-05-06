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

  const openMovieModalWindow = (name) => {
    setModalType(name);
    setIsMovieModalOpen(true);
  };

  const closeMovieModalWindow = () => setIsMovieModalOpen(false);

  const openDeleteModalWindow = () => setIsDeleteModalOpen(true);

  const closeDeleteModalWindow = () => setIsDeleteModalOpen(false);

  const openMovieInfoWindow = (currentMovie) => {
    setIsMovieInfoOpen(true);
    setMovie(currentMovie);
  };

  const closeMovieInfoWindow = () => setIsMovieInfoOpen(false);

  return (
    <>
      <Header
        newModal={openMovieModalWindow}
        isMovieInfoOpen={isMovieInfoOpen}
        onCloseMovieInfo={closeMovieInfoWindow}
        movie={movie}
      />
      <Main
        newModal={openMovieModalWindow}
        newDeleteModal={openDeleteModalWindow}
        newMovieInfo={openMovieInfoWindow}
      />
      <Footer />
      <MovieModal
        isOpen={isMovieModalOpen}
        onClose={closeMovieModalWindow}
        modalType={modalType}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModalWindow}
      />
    </>
  );
}
