import { Story, Meta } from '@storybook/react/types-6-0'
import { Switch, SwitchTypes } from '../src/components/Switch'

export default {
  title: 'Switch',
  component: Switch
} as Meta

export const Default: Story<SwitchTypes> = (args) => <Switch {...args} />
