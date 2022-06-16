import { Story, Meta } from '@storybook/react/types-6-0'
import BusSlider, { BusSliderTypes } from '../src/components/BusSlider'

export default {
  title: 'BusSlider',
  component: BusSlider
} as Meta

export const Default: Story<BusSliderTypes> = (args) => <BusSlider {...args} />
