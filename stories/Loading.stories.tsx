import { Story, Meta } from '@storybook/react/types-6-0'
import { Loading, LoadingSpinTypes } from '../src/components/Loading'

export default {
  title: 'Loading',
  component: Loading
} as Meta

export const Default: Story<LoadingSpinTypes> = (args) => (
  <Loading {...args} />
)
