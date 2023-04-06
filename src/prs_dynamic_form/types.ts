import React from 'react';

enum textAlign {
  left = 'left',
  center = 'center',
  right = 'right',
}

enum verticalAlign {
  bottom = 'bottom',
  middle = 'middle',
  top = 'top',
}

export interface SortableTableRowProps {
  active: boolean;
  as: React.ElementType;
  cellAs: React.ElementType;
  children: React.ReactNode;
  className: string;
  disabled: boolean;
  error: boolean;
  negative: boolean;
  positive: boolean;
  textAlign?: textAlign;
  verticalAlign?: verticalAlign;
  warning: boolean;
  first: string;
  second: string;
  third: string;
}

export enum FieldTypes {
  text = 'text',
  number = 'number',
  date = 'date',
}

interface FormRow {
  type: FieldTypes;
  name: string;
}

export interface FormSchema {
  [index: number]: FormRow;
}

export interface SimpleOptions {
  schema: FormSchema;
  formName: string;
}
