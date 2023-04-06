import React from 'react';
import { PanelProps } from '@grafana/data';
import { Form, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';
import styled from '@emotion/styled';
// import '@neocoast/semantic-ui-less/semantic.less';
// import axios from 'axios';

const StyledForm = styled(Form)`
  & * {
    color: white !important;
  }
  & input,
  textarea {
    background-color: #3c3c3c !important;
  }
  & button {
    background-color: #3c3c3c !important;
  }
  & .header {
    text-align: center;
  }
  & .button:hover {
    background-color: #484848 !important;
  }
`;

export const BasicFormPanel: React.FC<PanelProps> = ({ options, data, width, height }) => {
  console.log(options.schema);
  return (
    <StyledForm>
      <Header inverted>{options.formName}</Header>
      {options.schema.map(() => {})}
      <Form.Button>Submit</Form.Button>
    </StyledForm>
  );
};
