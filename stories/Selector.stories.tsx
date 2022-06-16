import { Story, Meta } from '@storybook/react/types-6-0'
import Selector, { SelectorTypes } from '../src/components/Selector'

export default {
  title: 'Selector',
  component: Selector
} as Meta

export const Default: Story<SelectorTypes> = (args) => <Selector {...args} />
