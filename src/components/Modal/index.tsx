import { Modal as AntdModal } from 'antd'
import { useEffect } from 'react'
export { default as confirm } from './confirm'

export type ModalTypes = {
  title?: string
  children?: React.ReactNode
  isOpen?: boolean
  footer?: React.ReactNode
  cancelButtonVisible?: boolean
  okButtonDisabled?: boolean
  spacedFooter?: boolean
  okText?: string
  cancelText?: string
  width?: number
  isLoading?: boolean
  borderInCancelButton?: boolean
  btnNoBorder?: boolean
  footerStyledPadding?: string
  /** only use to confirm modal */
  confirmText?: string
  onCancel?: () => void
  onOk?: () => void
}

const Modal = ({
  title,
  isOpen = false,
  spacedFooter = false,
  children,
  footer,
  width = 520,
  isLoading = false,
  cancelButtonVisible = true,
  okText = 'Ok',
  cancelText = 'Cancelar',
  btnNoBorder = true,
  footerStyledPadding,
  okButtonDisabled = false,
  borderInCancelButton = false,
  onCancel = () => true,
  onOk = () => true
}: ModalTypes) => {
  useEffect(() => {
    if (isOpen) {
      const antModalFooter: any = document.getElementsByClassName(
        'ant-modal-footer'
      )

      for (let i = 0; i < antModalFooter.length; i++) {
        if (antModalFooter && spacedFooter) {
          antModalFooter[i].style.display = 'flex'
          antModalFooter[i].style.justifyContent = 'space-between'
          antModalFooter[i].style.padding = '10px 23px'
        } else {
          antModalFooter[i].style.padding = footerStyledPadding
            ? footerStyledPadding
            : '20px 16px'
          antModalFooter[i].style.display = 'block'
        }
      }

      const btns: any = document.querySelectorAll('.ant-btn')

      for (let i = 0; i < btns.length; i++) {
        btns[i].style.border = btnNoBorder ? 'none' : '1px solid #7cafb0'
      }
    }
  }, [btnNoBorder, footerStyledPadding, isOpen, spacedFooter])

  return (
    <AntdModal
      title={title}
      visible={isOpen}
      onCancel={() => onCancel()}
      onOk={() => onOk()}
      className="footer-antd-spaced"
      footer={footer}
      okText={okText}
      cancelText={cancelText}
      width={width}
      cancelButtonProps={{
        style: !cancelButtonVisible
          ? { display: 'none' }
          : borderInCancelButton
          ? { border: '1px solid red !important' }
          : undefined,
        disabled: isLoading
      }}
      okButtonProps={{ disabled: okButtonDisabled, loading: isLoading }}
    >
      {children}
    </AntdModal>
  )
}

export default Modal
