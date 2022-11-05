import { useContext } from 'react';
import { ModalContext, ModalContextType } from '../contexts/ModalContext';

export const useModal = (): ModalContextType => {
  return useContext(ModalContext);
};
