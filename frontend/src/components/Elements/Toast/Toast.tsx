import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';

export interface ToastOptions {
  id?: string;
  type: 'success' | 'danger';
  autoClose?: number;
  title: string;
  description: string;
}

export interface ToastType extends ToastOptions {
  id: string;
}

export interface ToasterProps {
  toastData: ToastType[];
  closeToast: (id: string) => void;
}

interface ToastProps extends ToastType {
  closeToast: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  description,
  autoClose = 5,
  closeToast,
}) => {
  const [expiryCount, setExpiryCount] = useState<number>(autoClose);
  const expiryCountRef = useRef(expiryCount);

  useEffect(() => {
    expiryCountRef.current = expiryCount;
  }, [expiryCount]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExpiryCount(expiryCountRef.current - 1);
      if (expiryCountRef.current <= 0) {
        clearInterval(intervalId);
      }
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (expiryCount <= 0) {
      closeToast(id);
    }
  }, [expiryCount, closeToast, id]);

  return (
    <StyledToast type={type}>
      <Inner>
        <Icon
          variants={type === 'success' ? 'checkCircle' : 'exclamationCircle'}
          size="2.2rem"
          color="white"
        />
        <Body>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Body>
      </Inner>
      <Icon
        variants="close"
        size="2rem"
        color="white"
        onClick={() => closeToast(id)}
      />
    </StyledToast>
  );
};

export const Toaster: React.FC<ToasterProps> = ({ toastData, closeToast }) => {
  return (
    <Container>
      {toastData.map((data) => (
        <Toast {...data} key={data.id} closeToast={closeToast} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  z-index: 1;
  box-sizing: border-box;
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 100vh;
  height: auto;
  padding: 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledToast = styled.div<Pick<ToastType, 'type'>>`
  user-select: none;
  box-sizing: border-box;
  border-radius: 0.4rem;
  width: 30rem;
  height: auto;
  min-height: 6.5rem;
  padding: 1rem;
  color: #fff;
  background-color: ${({ theme, type }) =>
    type === 'success' ? theme.success : theme.danger};
  margin-bottom: 1.8rem;
  padding: 0.7rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    transform: translate(-1px, -1px);
  }
`;

const Title = styled.p`
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 400;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1.3rem;
`;

const Body = styled.div`
  margin-left: 1rem;
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
`;
