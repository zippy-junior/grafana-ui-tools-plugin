import React, { ReducerAction, useReducer } from 'react';
import { StandardEditorProps } from '@grafana/data';
import { Button, Dropdown, Icon, Table } from 'semantic-ui-react';
import { SortableContainer, SortableContainerProps, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { FormSchema, FieldTypes } from 'prs_dynamic_form/types';
import styled from '@emotion/styled';

const Handle = SortableHandle(() => (
  <Table.Cell>
    <Icon name="bars"></Icon>
  </Table.Cell>
));

const StyledDropdown = styled(Dropdown)`
  background: #434343 !important;
  color: #fff !important;
  & .menu > .item {
    background: #434343 !important;
    color: #eee !important;
  }
`;

const StyledTableRow = styled(Table.Row)`
  width: 100%;
`;

interface SortableItemProps {
  dispatch: Function;
}

const SortableItem = SortableElement<SortableItemProps>((dispatch: Function) => {
  return (
    <StyledTableRow>
      <Handle />
      <Table.Cell>
        <StyledDropdown
          invertred
          placeholder="Skills"
          fluid
          selection
          options={Object.values(FieldTypes).map((value) => {
            return { text: value, value: value };
          })}
        />
      </Table.Cell>
      <Table.Cell>
        <Button size="small" color="red" circular icon>
          <Icon name="minus"></Icon>
        </Button>
      </Table.Cell>
    </StyledTableRow>
  );
});

interface SortableListProps extends SortableContainerProps {
  children?: React.ReactNode | React.ReactNode[];
}

const SortableList = SortableContainer<SortableListProps>((props: SortableListProps) => {
  return <Table.Body>{props.children}</Table.Body>;
});

export const CustomOptionsEditor: React.FC<StandardEditorProps<FormSchema>> = ({ value, onChange }) => {
  interface Action {
    type: string;
    payload: {};
  }

  const reducer = (state: FormSchema, action: Action) => {
    switch (action.type) {
      case 'inputChange':
        return state;
      default:
        return state;
    }
  };

  const [formState, dispatch] = useReducer(reducer, {
    1: {
      type: FieldTypes.text,
      name: '',
    },
  });

  return (
    <Table inverted basic>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <SortableList useDragHandle>
        {Object.values(formState).map((index) => (
          <SortableItem key={index} index={index} dispatch={dispatch} />
        ))}
      </SortableList>
    </Table>
  );
};
