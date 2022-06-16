import { Story, Meta } from '@storybook/react/types-6-0'
import Modal, { ModalTypes } from '../src/components/Modal'
import confirm from '../src/components/Modal/confirm'
import { Wrapper } from '../src/components/Modal/styles'
import { Button } from 'antd'

export default {
  title: 'Modal',
  component: Modal
} as Meta

export const Default: Story<ModalTypes> = (args) => (
  <Modal {...args}>
    <h3>Conteúdo do Modal vem aqui</h3>
  </Modal>
)

export const Confirm: Story = () => {
  function openConfirm() {
    confirm({
      title: 'Precificação',
      okText: 'Gerenciar',
      children: (
        <h3 style={{ fontWeight: 400, fontSize: 12, color: '#87869A' }}>
          Tem certeza que deseja pausar a precificação das viagens selecionadas?
        </h3>
      ),
      cancelText: 'Pausar Precificação',
      footerStyledPadding: '10px',
      onOk: () => console.log('okokok'),
      onCancel: () => console.log('cancelll'),
      footer: (
        <Wrapper>
          <Button className="vl-confirm-modal-btns">Pausar Precificação</Button>
          <Button className="vl-confirm-modal-btns" type="primary">
            Cancelar
          </Button>
        </Wrapper>
      )
    })
  }

  return (
    <Button type="primary" onClick={openConfirm}>
      Abrir Modal de Confirmação
    </Button>
  )
}
