import { useContext } from 'react';
import { AnyAction } from 'redux';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Modal } from '../modal/modal';
import { ModalContext } from '../../context/modal-context';
import { removeMovie } from '../../state/remove-movie/remove-movie';
import { RootState } from '../../types/root-state';
import { ModalState } from '../../types/modal-state';
import { useGetParams } from '../../hooks/use-get-params/use-get-params';
import { Paragraph, StyledButton } from './style';

type DeleteModalProps = {
  isModalOpen: boolean;
};

export function DeleteModal({ isModalOpen }: DeleteModalProps) {
  const { handleModalClose, modal } = useContext(ModalContext);

  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const [params] = useGetParams();

  const handleButtonClick = async () => {
    if (modal?.name === ModalState.Delete) {
      await new Promise<void>((resolve) => {
        dispatch(removeMovie(modal.data.id, params));
        resolve();
      });
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
