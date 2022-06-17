import { Story, Meta } from '@storybook/react/types-6-0'
import * as S from '../src/components/NumberCard/styles'
import { NumberCard, NumberCardTypes } from '../src/components/NumberCard'

export default {
  title: 'NumberCard',
  component: NumberCard
} as Meta

export const Default: Story<NumberCardTypes> = (args) => (
  <S.CardGroup>
    <NumberCard {...args} />
  </S.CardGroup>
)

export const WithGroups: Story<NumberCardTypes> = (args) => (
  <S.CardGroup>
    <NumberCard {...args} />
    <NumberCard {...args} />
    <NumberCard {...args} />
  </S.CardGroup>
)
