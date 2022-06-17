import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Chart, ChartProps } from '../src/components/Chart'

export default {
  title: 'Charts',
  component: Chart
} as Meta

export const Default: Story<ChartProps> = (args) => <Chart {...args} />
