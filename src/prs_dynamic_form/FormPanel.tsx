import React from 'react';
import { PanelProps } from '@grafana/data';
import { Form } from 'semantic-ui-react';
import { IrowState } from './components/DynamicSchema/interfaces';
import { TimeInput } from 'semantic-ui-calendar-react';
import styled from '@emotion/styled';
// import axios from 'axios';

const StyledForm = styled(Form)`
  & input {
    background: #434343 !important;
  }
  & .dropdown {
    background: #434343 !important;
  }
`;

export const BasicFormPanel: React.FC<PanelProps> = ({ options, id, data, width, height }) => {
  console.log(options);
  return (
    <StyledForm inverted>
      {options.schema.map((row: IrowState, index: number) => {
        switch (row.dataType) {
          case 'string':
            return (
              <Form.Field>
                <label>{row.fieldName}</label>
                <input placeholder={row.fieldName} />
              </Form.Field>
            );
          case 'date':
            return (
              <Form.Field>
                <label>{row.fieldName}</label>
                <TimeInput name={row.fieldName} placeholder={row.dataType} value="" onChange={() => {}} />
              </Form.Field>
            );
          case 'timeInterval':
            return (
              <Form.Field fluid>
                <label>{row.fieldName}</label>
                <Form.Group widths="equal">
                  <Form.Field fluid>
                    <label>from</label>
                    <TimeInput name={row.fieldName} placeholder={row.dataType} value="" onChange={() => {}} />
                  </Form.Field>
                  <Form.Field fluid>
                    <label>to</label>
                    <TimeInput name={row.fieldName} placeholder={row.dataType} value="" onChange={() => {}} />
                  </Form.Field>
                </Form.Group>
              </Form.Field>
            );
          default:
            return <Form.Input key={index} label={row.fieldName} />;
        }
      })}
    </StyledForm>
  );
};
