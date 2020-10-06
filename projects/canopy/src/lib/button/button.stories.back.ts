import { Component, Input } from '@angular/core';

import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { iconsArray } from '../icon/icons.stories';
import { LgIconRegistry, LgIconModule } from '../icon';
import { LgButtonModule } from '.';
import { notes } from '../button/button.notes';
import { ButtonIconPosition } from './button.interface';

const buttonVariants = [
  'solid-primary',
  'solid-secondary',
  'outline-primary',
  'outline-secondary',
  'reverse-primary',
  'reverse-secondary',
];

const propsGroupId = 'properties';
const contentGroupId = 'content';

export default {
  title: 'Components/Button',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [LgButtonModule, LgIconModule],
      }),
    ],
    'in-dsm': {
      id: '5ec504bc07ffe609bec12b76',
    },
    notes: {
      markdown: notes,
    },
  },
};

@Component({
  selector: 'lg-button',
  template: `
    <button
      lg-button
      [variant]="variant"
      [iconButton]="iconButton"
      [iconPosition]="iconPosition"
      [loading]="loading"
      [fullWidth]="fullWidth"
    >
      <lg-icon *ngIf="showIcon" [name]="icon"></lg-icon>
      {{ content }}
    </button>
  `,
})
class LgButtonComponent {
  @Input() content: string;
  @Input() icon: string;
  @Input() variant: string;
  @Input() fullWidth: boolean;
  @Input() iconButton: boolean;
  @Input() iconPosition: ButtonIconPosition;
  @Input() loading: boolean;
  @Input() showIcon: boolean;
  icons = iconsArray;
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons(this.icons);
  }
}

const createProps = (
  config: any = {
    loading: false,
    variant: 'solid-primary',
    showIcon: false,
    fullWidth: false,
  },
) => ({
  variant: select('variant', buttonVariants, config.variant, propsGroupId),
  iconButton: boolean('iconButton', false, propsGroupId),
  iconPosition: select('iconPosition', ['left', 'right'], 'right', propsGroupId),
  fullWidth: boolean('fullWidth', config.fullWidth, propsGroupId),
  loading: boolean('loading', config.loading, propsGroupId),
  content: text('content', 'Button', contentGroupId),
  showIcon: boolean('show icon', config.showIcon, contentGroupId),
  icon: select(
    'icon',
    iconsArray.map(icon => icon.name),
    'add',
    contentGroupId,
  ),
});

export const primaryButton = () => ({
  // template: `
  //   <lg-button></lg-button>
  // `,
  component: LgButtonComponent,
  props: createProps({
    variant: 'solid-primary',
  }),
});

primaryButton.story = {
  parameters: {
    'in-dsm': { id: '5eb292680f022e10952f6b54' },
  },
};

// export const secondaryButton = () => ({
//   component: LgButtonComponent,
//   props: createProps({
//     variant: 'solid-secondary',
//   }),
// });

// secondaryButton.story = {
//   parameters: {
//     'in-dsm': { id: '5eb4178bd037c0361eb5b9e8' },
//   },
// };

// export const outlinePrimary = () => ({
//   component: LgButtonComponent,
//   props: createProps({
//     variant: 'outline-primary',
//   }),
// });

// outlinePrimary.story = {
//   parameters: {
//     'in-dsm': { id: '5ebab3747f701b0829ba471e' },
//   },
// };

// export const outlineSecondary = () => ({
//   component: LgButtonComponent,
//   props: createProps({
//     variant: 'outline-secondary',
//   }),
// });

// outlineSecondary.story = {
//   parameters: {
//     'in-dsm': { id: '5ebab380a6ef0234a74a414d' },
//   },
// };

// export const reversePrimary = () => ({
//   component: LgButtonComponent,
//   props: createProps({
//     variant: 'reverse-primary',
//   }),
// });

// reversePrimary.story = {
//   parameters: {
//     'in-dsm': { id: '5ebab38d7f701b688aba4724' },
//   },
// };

// export const reverseSecondary = () => ({
//   component: LgButtonComponent,
//   props: createProps({
//     variant: 'reverse-secondary',
//   }),
// });

// reverseSecondary.story = {
//   parameters: {
//     'in-dsm': { id: '5ebab396602d936ef763d72b' },
//   },
// };

// export const fullWidth = () => ({
//   component: LgButtonComponent,
//   props: createProps({
//     variant: 'outline-primary',
//     fullWidth: true,
//   }),
// });

// fullWidth.story = {
//   parameters: {
//     'in-dsm': { id: '5ecfb413e3f5ee0e8684cd63' },
//   },
// };

// export const textWithIcon = () => ({
//   component: LgButtonComponent,
//   props: createProps({
//     variant: 'solid-primary',
//     showIcon: true,
//   }),
// });

// export const iconOnly = () => ({
//   component: LgButtonComponent,
//   props: createProps({
//     variant: 'solid-primary',
//     iconButton: 'true',
//     showIcon: true,
//   }),
// });
