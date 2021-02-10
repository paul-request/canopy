export const notes = `
## Purpose

Alerts are used to communicate important information to the user.

## Usage

~~~js
@NgModule({
  ...
  imports: [ ..., LgAlertModule ],
})
~~~

and in your HTML:

~~~html
<lg-alert [variant]="warning">This is an alert</lg-alert>
~~~

## Accessibility

Add the correct Aria role attribute depending on the type of alert. \`\`role="alert"\`\` can be quite intrusive, so only use it when required.

See the Mozilla docs on [ARIA alert role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Alert_Role).
`;
