import { Story, Meta } from '@storybook/react/types-6-0'
import { useState } from 'react'
import Radio2, { RadioProps } from '../src/components/Radio'

export default {
  title: 'Radio',
  component: Radio2,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'valora-light'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<RadioProps> = (args) => (
  <div style={{ display: 'flex' }}>
    <div style={{ padding: 10 }}>
      <Radio2
        title="Label"
        label="primeiro"
        labelFor="primeiro"
        id="primeiro"
        name="nome"
        value="primeiro"
        defaultChecked
        {...args}
      />
    </div>
  </div>
)

export const Double: Story<RadioProps> = (args) => {
  const [val, setVal] = useState('primeiro')

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ padding: 10 }}>
        <Radio2
          title="Label"
          label="primeiro"
          labelFor="primeiro"
          id="primeiro"
          name="nome"
          value="primeiro"
          defaultChecked
          checked={val === 'primeiro'}
          onClick={() => setVal('primeiro')}
          {...args}
        />
      </div>
      <div style={{ padding: 10 }}>
        <Radio2
          label="segundo"
          labelFor="segundo"
          id="segundo"
          name="nome"
          value="segundo"
          onClick={() => setVal('segundo')}
          checked={val === 'segundo'}
          noFirstRadio
          {...args}
        />
      </div>
    </div>
  )
}

export const Triple: Story<RadioProps> = (args) => {
  const [val, setVal] = useState('primeiro')
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ padding: 10 }}>
        <Radio2
          title="Label"
          label="primeiro"
          labelFor="primeiro"
          id="primeiro"
          name="nome"
          value="primeiro"
          defaultChecked
          checked={val === 'primeiro'}
          onClick={() => setVal('primeiro')}
          {...args}
        />
      </div>
      <div style={{ padding: 10 }}>
        <Radio2
          label="segundo"
          labelFor="segundo"
          id="segundo"
          name="nome"
          value="segundo"
          noFirstRadio
          onClick={() => setVal('segundo')}
          checked={val === 'segundo'}
          {...args}
        />
      </div>
      <div style={{ padding: 10 }}>
        <Radio2
          label="terceiro"
          labelFor="terceiro"
          id="terceiro"
          name="nome"
          value="terceiro"
          noFirstRadio
          onClick={() => setVal('terceiro')}
          checked={val === 'terceiro'}
          {...args}
        />
      </div>
    </div>
  )
}
