import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { Icon } from 'semantic-ui-react';

const StyledAddRowButton = styled.tr`
  &:hover {
    & .container {
      opacity: 100;
      padding-top: 0.1rem;
      padding-bottom: 0.1rem;
    }
    & .container .icon {
      transform: scale(1.1);
    }
  }
  & .container {
    opacity: 0;
    transition: 100ms;
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: -0.5rem;
    margin-bottom: -0.5rem;
  }
  & .tick {
    flex-grow: 1;
    background-color: #eee;
    height: 1px;
  }
  & .icon {
    transition: 100ms;
    padding: 0 0.5rem 0 0.5rem;
  }
  & .icon .icon {
    margin: 0;
  }
`;

interface AddRowButtonProps extends PropsWithChildren<React.HTMLProps<HTMLTableCellElement>> {
  className?: string;
  onClick: () => void;
}

export const AddRowButton: React.FC<AddRowButtonProps> = ({ className, onClick }) => {
  return (
    <StyledAddRowButton
      className={className}
      onClick={() => {
        onClick();
      }}
    >
      <td colSpan={4} style={{ padding: 0 }}>
        <div className="container">
          <div className="tick"></div>
          <span className="icon">
            <Icon name="plus"></Icon>
          </span>
          <div className="tick"></div>
        </div>
      </td>
    </StyledAddRowButton>
  );
};
