import { Story, Meta } from '@storybook/react/types-6-0'
import { Tabs, TabsProps } from '../src/components/Tabs'

export default {
  title: 'Tabs',
  component: Tabs,
  args: {
    tabs: [
      {
        id: 'active',
        label: 'Ativo',
        isActive: true, 
        type: 'active'
      },
      {
        id: 'inactive',
        label: 'Inativo',
        isActive: false,
        type: 'inactive'
      }
    ]
  }
} as Meta

export const Default: Story<TabsProps> = (args) => <Tabs {...args} />
