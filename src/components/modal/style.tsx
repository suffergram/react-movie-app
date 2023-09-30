import ReactModal, { Styles } from 'react-modal';
import styled from 'styled-components';

export const StyledModal = styled(ReactModal)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-3);
  flex-direction: column;
  padding: 60px;
  z-index: 10;
  box-sizing: border-box;
`;

export const modalBackground: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10,
  },
};

export const ModalCloseButton = styled.button`
  background-color: transparent;
  color: var(--color-5);
  width: 21px;
  height: 21px;
  padding: 0;
  font-size: 21px;
  position: absolute;
  right: 31px;
  top: 31px;
  cursor: pointer;
  border: none;
`;

export const ModalTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 38px;
  text-transform: uppercase;
  font-size: 40px;
`;
