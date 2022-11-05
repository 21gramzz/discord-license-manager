import React, {
  ReactNode,
  useCallback,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';
import { Modal } from '../components/Elements/Modal';

export interface ModalContextType {
  isModalShown: boolean;
  setModalShown: Dispatch<SetStateAction<boolean>>;
  modalContent: ReactNode;
  setModalContent: Dispatch<SetStateAction<ReactNode>>;
  openModal: (node: ReactNode) => void;
  closeModal: () => void;
}

export const ModalContext = createContext({} as ModalContextType);

const useProvideModal = (): ModalContextType => {
  const [isModalShown, setModalShown] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const openModal = useCallback((content: ReactNode) => {
    setModalContent(content);
    setModalShown(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalContent(null);
    setModalShown(false);
  }, []);

  return {
    isModalShown,
    setModalShown,
    modalContent,
    setModalContent,
    openModal,
    closeModal,
  };
};

export const ModalProvider: React.FC = ({ children }) => {
  const {
    isModalShown,
    setModalShown,
    modalContent,
    setModalContent,
    openModal,
    closeModal,
  } = useProvideModal();

  return (
    <ModalContext.Provider
      value={{
        isModalShown,
        setModalShown,
        modalContent,
        setModalContent,
        openModal,
        closeModal,
      }}
    >
      {isModalShown && <Modal content={modalContent} closeModal={closeModal} />}
      {children}
    </ModalContext.Provider>
  );
};
