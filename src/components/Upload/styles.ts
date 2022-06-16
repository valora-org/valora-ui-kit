import styled, { css } from 'styled-components'
import { InsertDriveFile } from '@styled-icons/material-outlined/InsertDriveFile'
import { Person } from '@styled-icons/ionicons-sharp/Person'
import { Edit } from '@styled-icons/fluentui-system-regular/Edit'
import { DeleteOutline } from '@styled-icons/material-twotone/DeleteOutline'
import { RemoveRedEye } from '@styled-icons/material/RemoveRedEye'

export const Text = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.textStrong};
  width: 100%;
  height: 20px;
  text-align: center;
  margin-top: 14px;
`

export const Wrapper = styled.div<{ isActive?: boolean }>`
  .ant-upload.ant-upload-drag {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    background: transparent;
    border: 1px dashed
      ${({ theme, isActive }) =>
        isActive ? theme.colors.primary : theme.colors.clearGray};
    border-radius: 2px;
    cursor: pointer;
    transition: border-color 0.3s;
    border-radius: 24px !important;
    &:hover {
      border: 1px dashed ${({ theme }) => theme.colors.neutral};
    }
  }
  .ant-upload.ant-upload-drag.ant-upload-drag-hover:not(.ant-upload-disabled) {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  .ant-upload-list-item-info {
    height: 100%;
    padding: 4px;
    transition: background-color 0.3s;
  }
  .ant-upload-list-picture .ant-upload-list-item,
  .ant-upload-list-picture-card .ant-upload-list-item {
    position: relative;
    height: 66px;
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.colors.borderLine};
    border-radius: 8px;
  }
`

export const MultipleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px 0;
  height: 250px;
  &.height-fit {
    height: 150px;
  }
`

export const UploadIcon = styled.img.attrs({
  src: "https://bus.valora.cc/icons/upload.svg"
})`
  max-width: 100px;
`
export const MultipleTitle = styled.div`
  color: ${({ theme }) => theme.colors.cloudyBlue};
  font-size: 12px;
  font-weight: normal;
  text-align: center;
`

export const FileIcon = styled(InsertDriveFile)`
  width: 35px;
  height: 35px;
  color: ${({ theme }) => theme.colors.primary40};
  margin-top: -10px;
  margin-right: -20px;
`
export const TrashIcon = styled(DeleteOutline)`
  width: 22px;
  height: 22px;
  margin-top: -2px;
  color: ${({ theme }) => theme.colors.textStrong};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const PhotoWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  position: relative;
  .ant-modal-content {
    border-radius: 20px !important;
  }
  .ant-modal-header {
    border-radius: 20px 20px 0 0 !important;
  }
`

export const RoundPhoto = styled.div<{ url?: string }>`
  width: 130px;
  height: 130px;
  background: ${({ theme }) => theme.colors.primary40};
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  ${({ url }) =>
    url &&
    css`
      background-image: url(${url});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    `}
`

const iconCSS = css`
  width: 22px;
  height: 22px;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
`

export const EyeIcon = styled(RemoveRedEye)`
  ${iconCSS}
`

export const TrashAvatarIcon = styled(DeleteOutline)`
  ${iconCSS}
`

export const IconsAvatar = styled.div`
  width: 130px;
  height: 130px;
  background: rgba(0, 0, 0, 0.5);
  gap: 0 10px;
  position: absolute;
  z-index: 30;
  top: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  opacity: 0;
  transition: opacity 0.4s;
  &:hover {
    opacity: 1;
  }
`

export const UserIcon = styled(Person)<{ url: boolean }>`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  color: white;
  display: ${({ url }) => (url ? 'none' : 'block')};
`
export const EditWrapper = styled.button`
  outline: none;
  border: none;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.primary};
  /* transition: 0.5s border; */
  cursor: pointer;
  z-index: 100;
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primaryFocus};
  }
`

export const PenIcon = styled(Edit)`
  color: white;
  width: 20px;
  height: 20px;
`
export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  max-width: 100%;
  max-height: 450px;
  object-fit: contain;
  border-radius: 50%;
  flex-shrink: 0;
`

export const Submit = styled.button<{ isLoading?: boolean }>`
  padding: 5px 20px;
  border: 1px solid transparent;
  outline: none;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: white;
  font-size: 12.5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 0.6s;
  position: relative;
  ${({ isLoading }) =>
    isLoading &&
    css`
      padding-right: 50px;
    `}
  &:hover {
    background: rgba(115, 158, 164, 1);
  }
  &:disabled {
    background: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.2);
    cursor: not-allowed;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary40};
  }
  &.save-and-stay {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      background: rgba(124, 175, 176, 0.1);
      color: ${({ theme }) => theme.colors.primary40};
    }
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.primary40};
    }
    &:disabled {
      border: 1px solid rgba(0, 0, 0, 0.1);
      color: rgba(0, 0, 0, 0.4);
      cursor: not-allowed;
      &:hover {
        background: transparent;
      }
    }
  }
`

export const Cancel = styled.button`
  color: ${({ theme }) => theme.colors.primary40};
  font-size: 12.5px;
  outline: none;
  padding: 5px 20px;
  border-radius: 4px;
  border: none;
  background: transparent;
  cursor: pointer;
  border: 1px solid transparent;
  &:hover {
    background: rgba(124, 175, 176, 0.1);
    color: ${({ theme }) => theme.colors.primary40};
  }
  &:disabled {
    background: transparent;
    color: rgba(0, 0, 0, 0.2);
    cursor: not-allowed;
    &:hover {
      background: transparent;
    }
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary40};
  }
`
