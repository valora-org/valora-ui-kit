import { Story, Meta } from '@storybook/react/types-6-0'
import Select from '../src/components/Select'
import { SelectTypes } from '../src/components/Select/types'

export default {
  title: 'Select',
  component: Select
} as Meta

export const Default: Story<SelectTypes> = (args) => <Select {...args} />
