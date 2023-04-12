export enum EdataType {
  string = 'string',
  date = 'date',
  number = 'number',
  timeInterval = 'timeInterval',
}

export interface IrowState {
  [index: string]: string | boolean | EdataType | null;
  fieldName: string;
  dataType: EdataType | null;
}

// export interface ItableState {
//   [index: number]: IrowState;
// }

export type TtableState = IrowState[];
