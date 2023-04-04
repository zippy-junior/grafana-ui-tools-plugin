import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { BasicFormPanel } from './components/Form';

export const plugin = new PanelPlugin<SimpleOptions>(BasicFormPanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'text',
      name: 'Simple text option',
      description: 'Description of panel option',
      defaultValue: 'Default value of text input option',
    })
    .addTextInput({
      path: 'url',
      name: 'URL path',
      description: 'URL to send table data to',
    });
});
