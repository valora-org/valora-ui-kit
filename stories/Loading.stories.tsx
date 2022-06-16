import { Story, Meta } from '@storybook/react/types-6-0'
import LoadingSpin, { LoadingSpinTypes } from '../src/components/Loading'

export default {
  title: 'Loading',
  component: LoadingSpin
} as Meta

export const Default: Story<LoadingSpinTypes> = (args) => (
  <LoadingSpin {...args} />
)
