import { Field } from 'tinacms';


export interface GroupListField<T = unknown> {
  component: 'group-list';
  name: string;
  label?: string;
  description?: string;
  fields: Field[];
  defaultItem?: T | (() => T);
  itemProps?: (item: T) => {
    key?: string;
    label?: string;
  };
}
