import ReactDOM from 'react-dom'
import Modal, { ModalTypes } from '.'

export default function confirm({
  title,
  okText,
  cancelText,
  onOk = () => true,
  onCancel = () => true,
  footer,
  children,
  ...props
}: ModalTypes) {
  const container = document.createDocumentFragment()

  const unmount = () => {
    render(false)

    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(container)
    }, 500)
  }

  const closeConfirm = (action: 'ok' | 'cancel') => {
    if (action === 'ok') {
      onOk()
    } else {
      onCancel()
    }
    unmount()
  }

  setTimeout(() => {
    const classesNames = document.querySelectorAll('.vl-confirm-modal-btns')

    classesNames.forEach((className) => {
      className.addEventListener('click', () => unmount())
    })
  }, 300)

  const render = (isOpen: boolean) => {
    ReactDOM.render(
      <Modal
        isOpen={isOpen}
        width={442}
        title={title}
        okText={okText}
        cancelText={cancelText}
        onCancel={() => closeConfirm('cancel')}
        onOk={() => closeConfirm('ok')}
        footer={footer}
        {...props}
      >
        {children}
      </Modal>,
      container
    )
  }

  render(true)
}
