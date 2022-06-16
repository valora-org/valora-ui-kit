import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Card, { CardProps } from '../src/components/Card'

export default {
  title: 'Cards',
  component: Card,
  argTypes: {
    firstFillColor: { control: 'color' },
    secondFillColor: { control: 'color' }
  }
} as Meta

export const Ticket: Story<CardProps> = (args) => <Card {...args} />
