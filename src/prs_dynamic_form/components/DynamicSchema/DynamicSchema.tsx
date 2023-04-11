import styled from '@emotion/styled';
import React, { useReducer } from 'react';
import { Table, Header } from 'semantic-ui-react';
import { AddRowButton } from './AddRowButton';
import { DynamicRow } from './DynamicRow';
import { TtableState, EdataType, IrowState } from './interfaces';

interface DynamicSchemaProps {
  optionValue: TtableState;
  onOptionChange: Function;
}

const StyledTable = styled(Table)`
  & input {
    background: #434343 !important;
  }
  & .dropdown {
    background: #434343 !important;
  }
  & tr td {
    border-top: 0px !important;
  }
`;

export const DynamicSchema: React.FC<DynamicSchemaProps> = ({ optionValue, onOptionChange }) => {
  const initialTableState: TtableState = [
    {
      fieldName: '',
      required: false,
      dataType: EdataType.string,
    },
  ];
  interface TableStateAction {
    type: string;
    payload: {
      rowIndex: number;
      field: string;
      value: any;
    };
  }

  const reducer = (state: TtableState, action: TableStateAction) => {
    switch (action.type) {
      case 'addRow':
        let emptyRow: IrowState = {
          fieldName: '',
          required: false,
          dataType: null,
        };
        let newAddState = JSON.parse(JSON.stringify(state)) as TtableState;
        newAddState.splice(action.payload.rowIndex + 1, 0, emptyRow);
        onOptionChange(newAddState);
        return newAddState;
      case 'delRow':
        let newDelState = JSON.parse(JSON.stringify(state)) as TtableState;
        newDelState.splice(action.payload.rowIndex, 1);
        onOptionChange(newDelState);
        return newDelState;
      case 'inputChange':
        let newICState = JSON.parse(JSON.stringify(state)) as TtableState;
        if (action.payload.field && action.payload.value) {
          newICState[action.payload.rowIndex][action.payload.field] = action.payload.value;
          onOptionChange(newICState);
        }
        return newICState;
      default:
        return state;
    }
  };

  const init = (): any => {
    return optionValue ? optionValue : initialTableState;
  };

  const [tableState, tableStateDispatch] = useReducer(reducer, initialTableState, init);

  return (
    <StyledTable inverted compact basic="very">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            <Header>Field name</Header>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Header>Field type</Header>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Header>Delete</Header>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {tableState.map((value, index) => {
          return (
            <>
              <DynamicRow
                onDelRow={() => {
                  tableStateDispatch({
                    type: 'delRow',
                    payload: {
                      rowIndex: index,
                      field: '',
                      value: '',
                    },
                  });
                }}
                rowIndex={index}
                tableStateDispatch={tableStateDispatch}
                key={index}
                rowData={value}
              ></DynamicRow>
              <AddRowButton
                onClick={() => {
                  tableStateDispatch({
                    type: 'addRow',
                    payload: {
                      rowIndex: index,
                      field: '',
                      value: '',
                    },
                  });
                }}
              ></AddRowButton>
            </>
          );
        })}
      </Table.Body>
    </StyledTable>
  );
};
