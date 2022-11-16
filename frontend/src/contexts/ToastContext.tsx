import React, { createContext, useCallback, useState } from 'react';
import { Toaster, ToastType, ToastOptions } from '../components/Elements';
import * as randomstring from 'randomstring';

export interface ToastContextType {
  toastData: ToastType[];
  setToast: (toastData: ToastOptions) => void;
  closeToast: (id: string) => void;
}

export const ToastContext = createContext({} as ToastContextType);

const useProvideToast = (): ToastContextType => {
  const [toastData, setToastData] = useState<ToastType[]>([]);

  const setToast = useCallback(
    (data: ToastOptions) => {
      setToastData([
        ...toastData,
        { ...data, id: data.id || randomstring.generate(32) },
      ]);
    },
    [toastData],
  );
  const closeToast = useCallback(
    (id: string) => {
      setToastData(toastData.filter((toast) => toast.id !== id));
    },
    [toastData],
  );

  return { toastData, setToast, closeToast };
};

export const ToastProvider: React.FC = ({ children }) => {
  const { toastData, setToast, closeToast } = useProvideToast();
  return (
    <ToastContext.Provider value={{ toastData, setToast, closeToast }}>
      <Toaster toastData={toastData} closeToast={closeToast} />
      {children}
    </ToastContext.Provider>
  );
};
