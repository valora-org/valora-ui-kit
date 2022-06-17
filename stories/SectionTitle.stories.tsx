import { Story, Meta } from '@storybook/react/types-6-0'
import { SectionTitle, SectionTitleTypes } from '../src/components/SectionTitle'

export default {
  title: 'SectionTitle',
  component: SectionTitle
} as Meta

export const Default: Story<SectionTitleTypes> = (args) => (
  <SectionTitle {...args} />
)
