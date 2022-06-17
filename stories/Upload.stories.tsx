import { Story, Meta } from '@storybook/react/types-6-0'
import { Upload, UploadTypes } from '../src/components/Upload'

export default {
  title: 'Upload',
  component: Upload
} as Meta

export const Default: Story<UploadTypes> = (args) => <Upload {...args} />
