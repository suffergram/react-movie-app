import React from 'react';
import { Movie } from '../../types/movie';

type AppContextType = {
  isMovieModalOpen: boolean;
  handleMovieModalOpen(name: string): void;
  handleMovieModalClose(): void;
  isDeleteModalOpen: boolean;
  handleDeleteModalOpen(currentMovie: Movie): void;
  handleDeleteModalClose(): void;
  isCongratModalOpen: boolean;
  handleCongratModalOpen(): void;
  handleCongratModalClose(): void;
  isMovieInfoOpen: boolean;
  handleMovieInfoOpen(currentMovie: Movie): void;
  handleMovieInfoClose(): void;
  movie: Movie | null;
  modalType: string | null;
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleDeleteModalOpen: (movie: Movie) => {
    // init value
  },
  handleDeleteModalClose: () => {
    // init value
  },
  isCongratModalOpen: false,
  handleCongratModalOpen: () => {
    // init value
  },
  handleCongratModalClose: () => {
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
