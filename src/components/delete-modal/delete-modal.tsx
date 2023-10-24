import { useContext } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Modal } from '../modal/modal';
import { ModalContext } from '../../context/modal-context';
import { ModalState } from '../../types/modal-state';
import { useGetParams } from '../../hooks/use-get-params/use-get-params';
import { Paragraph, StyledButton } from './style';
import { MovieService } from '../../services/movie-service';

type DeleteModalProps = {
  isModalOpen: boolean;
};

export function DeleteModal({ isModalOpen }: DeleteModalProps) {
  const { handleModalClose, modal } = useContext(ModalContext);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [params] = useGetParams();

  const handleButtonClick = () => {
    const path = `${pathname}?${searchParams.toString()}`;
    router.push(path);

    if (modal?.name === ModalState.Delete) {
      MovieService.deleteMovie(modal.data.id)
        .then(() => MovieService.getMovies(params))
        .then(() => router.refresh());
      handleModalClose();
    }
  };

  return (
    <Modal
      isModalOpen={isModalOpen}
      onModalClose={handleModalClose}
      title="delete movie"
    >
      <Paragraph>Are you sure you want to delete this movie?</Paragraph>
      <StyledButton variant="primary" onClick={handleButtonClick}>
        confirm
      </StyledButton>
    </Modal>
  );
}
