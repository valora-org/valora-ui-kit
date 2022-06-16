import { Story, Meta } from '@storybook/react/types-6-0'
import Block, { BlockProps } from '../src/components/Block'

export default {
  title: 'Block',
  component: Block
} as Meta

export const Default: Story<BlockProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Block label="Viagem" {...args}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maxime sunt fugiat error necessitatibus amet ut facere fugit doloremque, culpa hic molestiae voluptas quidem distinctio cumque exercitationem id reprehenderit nulla!
      </Block>
      <Block label="Algoritmo" {...args}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quae velit eligendi. Repellat impedit fugiat eligendi veritatis est, esse hic, deleniti suscipit facilis molestias et ab pariatur error voluptates totam.
      </Block>
    </div>
  </>
)
