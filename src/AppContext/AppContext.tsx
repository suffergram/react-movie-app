import React from 'react';
import { Movie } from '../Types/MovieTypes';

type AppContextType = {
  isMovieModalOpen: boolean,
  handleMovieModalOpen(name: string): void,
  handleMovieModalClose(): void,
  isDeleteModalOpen: boolean,
  handleDeleteModalOpen(): void,
  handleDeleteModalClose(): void,
  isMovieInfoOpen: boolean,
  handleMovieInfoOpen(currentMovie: Movie): void,
  handleMovieInfoClose(): void,
  movie: Movie | null,
  modalType: string | null,
};

const AppContext = React.createContext<AppContextType>({
  isMovieModalOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleMovieModalOpen: (name: string) => {
    // init value
  },
  handleMovieModalClose: () => {
    // init value
  },
  isDeleteModalOpen: false,
  handleDeleteModalOpen: () => {
    // init value
  },
  handleDeleteModalClose: () => {
    // init value
  },
  isMovieInfoOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleMovieInfoOpen: (movie: Movie) => {
    // init value
  },
  handleMovieInfoClose: () => {
    // init value
  },
  modalType: null,
  movie: null,
});

export default AppContext;
