import { Story, Meta } from '@storybook/react/types-6-0'
import Tooltip, { TooltipTypes } from '../src/components/Tooltip'

export default {
  title: 'Tooltip',
  component: Tooltip,
  args: {
    label: 'Tooltip here'
  }
} as Meta

export const Default: Story<TooltipTypes> = (args) => <Tooltip {...args} />
