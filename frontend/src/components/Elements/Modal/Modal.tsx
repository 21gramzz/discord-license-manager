import React, { ReactNode } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { Icon } from '../Icon';

interface ModalProps {
  content: ReactNode;
  closeModal: () => void;
}

const modalRoot = document.getElementById('root');

export const Modal: React.FC<ModalProps> = ({
  content,
  closeModal,
  ...props
}) => {
  return modalRoot
    ? ReactDOM.createPortal(
        <Background>
          <Container>
            <IconWrap>
              <Icon onClick={() => closeModal()} variants="close" size="2rem" />
            </IconWrap>
            {content}
          </Container>
        </Background>,
        modalRoot,
      )
    : null;
};

const Background = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  border-radius: 0.95rem;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.body};
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.5rem;
`;
