import { useContext } from 'react';
import { ModalContext } from '../../context/modal-context';
import { ModalState } from '../../types/modal-state';
import { SearchForm } from '../search-form/search-form';
import { Logo } from '../logo/logo';
import { Container, Content, HeaderLogo, AddButton, Title } from './style';

export function Header() {
  const { handleModalOpen } = useContext(ModalContext);

  const handleClick = () => {
    handleModalOpen({
      name: ModalState.Add,
    });
  };

  return (
    <Container>
      <Content>
        <HeaderLogo>
          <Logo />
        </HeaderLogo>
        <AddButton onClick={handleClick} variant="add">
          + add movie
        </AddButton>
        <div>
          <Title>FIND YOUR MOVIE</Title>
          <SearchForm />
        </div>
      </Content>
    </Container>
  );
}
