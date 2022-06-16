import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ProgressCircle, { ProgressProps } from '../src/components/Progress'

export default {
  title: 'Progress',
  component: ProgressCircle,
  args: {
    children: <span />,
  }
} as Meta

export const Default: Story<ProgressProps> = (args) => (
  <ProgressCircle {...args} />
)
