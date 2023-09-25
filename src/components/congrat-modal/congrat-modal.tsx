import { useContext } from 'react';
import { Modal } from '../modal/modal';
import { ModalContext } from '../../context/modal-context';
import { CheckIcon } from '../check-icon/check-icon';
import { Content, Paragraph } from './style';

type CongratModalProps = {
  isModalOpen: boolean;
};

export function CongratModal({ isModalOpen }: CongratModalProps) {
  const { handleModalClose } = useContext(ModalContext);

  return (
    <Modal
      isModalOpen={isModalOpen}
      onModalClose={handleModalClose}
      title="congratulations"
      icon={<CheckIcon />}
    >
      <Content>
        <Paragraph>The movie has been added to database successfully</Paragraph>
      </Content>
    </Modal>
  );
}
