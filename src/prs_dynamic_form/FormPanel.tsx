import React, { useEffect, useState } from 'react';
import { PanelProps } from '@grafana/data';
import { Button, Form } from 'semantic-ui-react';
import styled from '@emotion/styled';
import axios from 'axios';
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

  const [checkedField, setCheckedField] = useState([0, 0]);

  const [tagData, setTagData] = useState(0);

  useEffect(() => {
    get_tag_data('123456');
  }, []);

  const get_tag_data = (id: string) => {
    axios
      .get('')
      .then((value) => {
        setTagData(value.data);
        console.log(value);
      })
      .catch(() => {
        console.log('Error');
      });
  };

  function updateChecked(index, newValue) {
    // shallow copy
    const newArray = [...checkedField];
    // mutate copy
    newArray[index] = newValue;
    // set state
    setCheckedField(newArray);
  }

  return (
    <StyledForm inverted>
      {checkedField.map((checked, i) => {
        return (
          <Form.Field key={i} style={{ border: checked ? '2px solid blue' : '' }}>
            <label>{'tag name'}</label>
            <input placeholder={tagData.toString()} />
            <Button onClick={() => updateChecked(i, !checked[i])}>Send</Button>
          </Form.Field>
        );
      })}
    </StyledForm>
  );
};
