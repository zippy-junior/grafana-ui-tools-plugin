import React from 'react';
import { Table, Input, Button, Dropdown } from 'semantic-ui-react';
import { IrowState, EdataType } from './interfaces';

interface DynamicRowProps {
  rowData: IrowState;
  rowIndex: number;
  tableStateDispatch: Function;
  onDelRow: Function;
}

export const DynamicRow: React.FC<DynamicRowProps> = ({ rowData, rowIndex, onDelRow, tableStateDispatch }) => {
  return (
    <Table.Row>
      <Table.Cell>
        <Input
          fluid
          placeholder="Field name"
          onChange={(event) => {
            tableStateDispatch({
              type: 'inputChange',
              payload: {
                rowIndex: rowIndex,
                field: 'fieldName',
                value: event.target.value,
              },
            });
          }}
          value={rowData.fieldName}
        />
      </Table.Cell>
      <Table.Cell>
        <Dropdown
          fluid
          placeholder="Data type"
          search
          selection
          options={Object.keys(EdataType).map((value, index) => {
            return { key: value, text: value, value: value };
          })}
          onChange={(e, { value }) => {
            tableStateDispatch({
              type: 'inputChange',
              payload: {
                rowIndex: rowIndex,
                field: 'dataType',
                value: value,
              },
            });
          }}
        />
      </Table.Cell>
      <Table.Cell>
        <Button
          circular
          onClick={() => {
            onDelRow();
          }}
          color="red"
          icon="close"
        />
      </Table.Cell>
    </Table.Row>
  );
};
