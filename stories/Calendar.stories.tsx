import { Story, Meta } from '@storybook/react/types-6-0'
import Calendar, { CalendarTypes } from '../src/components/Calendar'

export default {
  title: 'Calendar',
  component: Calendar
} as Meta

export const Default: Story<CalendarTypes> = (args) => <Calendar {...args} />
