import React from 'react';
import { StandardEditorProps } from '@grafana/data';
import 'semantic-ui-css/semantic.css';
import { DynamicSchema } from './DynamicSchema/DynamicSchema';

// const StyledDropdown = styled(Dropdown)`
//   background: #434343 !important;
//   color: #fff !important;
//   & .menu > .item {
//     background: #434343 !important;
//     color: #eee !important;
//   }
// `;

// const StyledTableRow = styled(Table.Row)`
//   width: 100%;
// `;

export const CustomOptionsEditor: React.FC<StandardEditorProps> = ({ value, onChange }) => {
  return <DynamicSchema optionValue={value} onOptionChange={onChange}></DynamicSchema>;
};
