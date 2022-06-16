import { Story, Meta } from '@storybook/react/types-6-0'
import Grid, { GridType } from '../src/components/Grid'

export default {
  title: 'Grid',
  component: Grid
} as Meta

export const Default: Story<GridType> = (args) => <Grid {...args} />
