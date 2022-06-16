import { Story, Meta } from '@storybook/react/types-6-0'

import Slider, { SliderProps } from '../src/components/Slider'

export default {
  title: 'Slider',
  component: Slider,
  args: {
    label: 'Label',
    initialValue: '1',
    disabled: false
  },
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta

export const Default: Story<SliderProps> = (args) => <Slider {...args} />