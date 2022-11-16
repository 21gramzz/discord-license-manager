import React, { useCallback } from 'react';
import styled from 'styled-components';
import {
  Trash,
  ArrowLeftShort,
  ArrowRightShort,
  SunFill,
  MoonFill,
  ExclamationCircleFill,
  CheckCircleFill,
} from '@styled-icons/bootstrap';
import { CloseOutline } from '@styled-icons/evaicons-outline';
import { Create } from '@styled-icons/ionicons-outline';
import { Add } from '@styled-icons/fluentui-system-filled';

export interface IconProps {
  size?: string;
  color?: string;
  margin?: string;
  padding?: string;
  onClick?: () => void;
  variants?:
    | 'create'
    | 'trash'
    | 'arrowLeft'
    | 'arrowRight'
    | 'close'
    | 'sun'
    | 'moon'
    | 'add'
    | 'checkCircle'
    | 'exclamationCircle';
}

export const Icon: React.FC<IconProps> = ({
  size = '1em',
  variants,
  ...props
}) => {
  const icon = useCallback(() => {
    switch (variants) {
      case 'sun':
        return <SunFill size={size} />;
      case 'moon':
        return <MoonFill size={size} />;
      case 'arrowLeft':
        return <ArrowLeftShort size={size} />;
      case 'arrowRight':
        return <ArrowRightShort size={size} />;
      case 'close':
        return <CloseOutline size={size} />;
      case 'create':
        return <Create size={size} />;
      case 'trash':
        return <Trash size={size} />;
      case 'add':
        return <Add size={size} />;
      case 'checkCircle':
        return <CheckCircleFill size={size} />;
      case 'exclamationCircle':
        return <ExclamationCircleFill size={size} />;
    }
  }, [size, variants]);

  return <IconStyleWrapper {...props}>{icon()}</IconStyleWrapper>;
};

export const IconStyleWrapper = styled.span<
  Pick<IconProps, 'color' | 'margin' | 'padding' | 'size'>
>`
  color: ${({ color, theme }) => color || theme.text};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
