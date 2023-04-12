import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

const AddInputButton = styled.div`
  height: 2.7rem;
  border-radius: 0.3rem;
  border: 1px dashed teal;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &&:hover {
    transform: scale(1.03);
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    transition-duration: 500ms;
  }
`;

interface AddInputProps extends PropsWithChildren {
  className: string;
  onClick: Function;
  children?: React.ReactElement;
}

export const AddRowButton: React.FC<AddInputProps> = ({ className, children, onClick }) => {
  return (
    <AddInputButton
      className={className}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </AddInputButton>
  );
};
