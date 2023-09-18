import { useContext } from 'react';
import { Button } from '../button/button';
import { ModalContext } from '../../context/modal-context';
import { ModalState } from '../../types/modal-state';
import { SearchForm } from '../search-form/search-form';
import { Logo } from '../logo/logo';
import './style.css';

export function Header() {
  const { handleModalOpen } = useContext(ModalContext);

  const handleClick = () => {
    handleModalOpen({
      name: ModalState.Add,
    });
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-pos">
          <Logo />
        </div>
        <Button className="add" onClick={handleClick}>
          + add movie
        </Button>
        <div>
          <h1>FIND YOUR MOVIE</h1>
          <SearchForm />
        </div>
      </div>
    </header>
  );
}
