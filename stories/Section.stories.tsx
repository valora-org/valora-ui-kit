import { Story, Meta } from '@storybook/react/types-6-0'
import Section, { SectionTypes } from '../src/components/Section'

const args: SectionTypes = {
  title: 'Título',
  children: <span>Valora</span>
}

export default {
  title: 'Section',
  component: Section,
  args
} as Meta

export const Default: Story<SectionTypes> = (args) => <Section {...args} />