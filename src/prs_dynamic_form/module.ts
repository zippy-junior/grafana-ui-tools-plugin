import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { BasicFormPanel } from './components/Form';
import { CustomOptionsEditor } from './components/Options';

export const plugin = new PanelPlugin<SimpleOptions>(BasicFormPanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'formName',
      name: 'Name of the form',
    })
    .addCustomEditor({
      id: 'schema',
      path: 'schema',
      name: 'Schema',
      editor: CustomOptionsEditor,
    });
});
