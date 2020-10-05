import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [Story => Story()],
};

const Template = (args) => {
  const [primary, setPrimary] = React.useState(args.primary)

  return <>
    <Button {...args} primary={primary} />

    <button onClick={() => setPrimary(!primary)}>
      Toggle Primary with Transition
    </button>

    <div style={{ marginTop: '24px' }}>
      Note: if <em>primary</em> is toggled via the "control" below, the transitions will not happen.
    </div>
  </>
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
