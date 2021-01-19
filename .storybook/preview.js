import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from '../documentation.json';
import cssVars from 'css-vars-ponyfill';
import canopyTheme from './canopy-theme';

setCompodocJson(docJson);

require('!style-loader!css-loader!sass-loader!../projects/canopy/src/styles/styles.scss');

cssVars({
  watch: true,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    values: [
      { name: 'Default', value: 'transparent', default: true },
      { name: 'Midnight Blue', value: '#005380' },
      { name: 'Charcoal', value: '#333' },
      { name: 'Super Blue', value: '#0076d6' },
      { name: 'Leafy Green', value: '#028844' },
    ],
  },
  docs: {
    theme: canopyTheme
  }
};
