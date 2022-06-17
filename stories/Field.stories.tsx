import { Story, Meta } from '@storybook/react/types-6-0'

import { Field, FieldProps } from '../src/components/Field'

export default {
  title: 'Field',
  component: Field,
} as Meta

export const Default: Story<FieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <Field {...args} />
  </div>
)