import { Meta, Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { AlertVariant } from './alert.interface';

import { LgAlertModule } from './alert.module';
import { LgAlertComponent } from './alert.component';
import { notes } from './alert.notes';

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Alert',
  component: LgAlertComponent,
  decorators: [
    moduleMetadata({
      imports: [LgAlertModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {
    content: {
      description: 'Projected content',
    },
    showIcon: {
      description: 'Whether the icon should display',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    variant: {
      description: 'Variant of alert',
      table: {
        type: {
          summary: Object.values(AlertVariant),
        },
        defaultValue: {
          summary: AlertVariant.Generic,
        },
      },
      control: {
        type: 'select',
        options: Object.values(AlertVariant),
      },
    },
  },
} as Meta;

const template = `
<lg-alert
  [showIcon]="showIcon"
  [variant]="variant">
  {{content}} Here is some <a href="#"> link text</a>.
</lg-alert>
`;

const Template: Story<LgAlertComponent> = (args: LgAlertComponent) => ({
  component: LgAlertComponent,
  props: args,
  template,
});

export const StandardAlert = Template.bind({});
StandardAlert.storyName = 'Standard';
StandardAlert.args = {
  content: 'This is an alert.',
  variant: AlertVariant.Generic,
};
StandardAlert.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
