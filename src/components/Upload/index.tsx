import React, { useState, useEffect, useCallback } from 'react'
import * as S from './styles'
import { Upload as AntdUpload, Modal, Button } from 'antd'
import ImgCrop from 'antd-img-crop'
import { UploadChangeParam } from 'antd/lib/upload'
import { RcFile, UploadFile } from 'antd/lib/upload/interface'
const { Dragger } = AntdUpload

export type FileUpload = {
  lastModified: number
  lastModifiedDate: Date
  name: string
  size: number
  type: string
  uid: string
  webkitRelativePath: string
}

export type UploadTypes = {
  label?: string
  type?: 'multiple' | 'avatar'
  onChange?: (info: (RcFile | undefined)[] | RcFile | undefined) => void
  initialImageAvatar?: string
  accept?: string
  noDelete?: boolean
  className?: string
  defaultFiles?: any
  underText?: string
  isActive?: boolean
}

let timeout: any

const Upload = ({
  label = 'Clique ou arraste e solte o arquivo aqui',
  type = 'multiple',
  initialImageAvatar,
  onChange = () => true,
  accept,
  noDelete = false,
  className,
  underText,
  defaultFiles,
  isActive = false
}: UploadTypes) => {
  const [files, setFiles] = useState<any>([])
  const [base64, setBase64] = useState<string | ArrayBuffer | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    if (initialImageAvatar) {
      setBase64(initialImageAvatar)
    }
  }, [initialImageAvatar])

  useEffect(() => {
    if (defaultFiles) {
      setFiles(defaultFiles)
    }
  }, [defaultFiles])

  const handleChangeMultiple = useCallback(
    (info: UploadChangeParam<UploadFile<any>>) => {
      const arrayFiles = []
      const { fileList } = info

      for (let i = 0; i < fileList.length; i++) {
        fileList[i].status = 'done'

        arrayFiles.push(fileList[i].originFileObj)
      }

      setFiles(fileList)
      onChange(arrayFiles)
    },
    [onChange]
  )

  const getBase64 = (img: any) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      setBase64(reader.result)
    })
    reader.readAsDataURL(img)
  }

  const handleChangeAvatar = useCallback(
    (info: UploadChangeParam<UploadFile<any>>) => {
      clearTimeout(timeout)
      info.file.status = 'done'

      timeout = setTimeout(() => {
        getBase64(info.file.originFileObj)
        onChange(info.file.originFileObj)
      }, 500)
    },
    [onChange]
  )

  const handleClear = () => {
    setBase64('')
    onChange(undefined)
  }

  if (type === 'avatar') {
    return (
      <>
        <Modal
          title="Imagem"
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={[
            <Button
              key="ok"
              type="primary"
              onClick={() => setIsModalVisible(false)}
            >
              Ok
            </Button>
          ]}
        >
          <S.ImageWrapper>
            <S.Image src={base64 ? String(base64) : ''} />
          </S.ImageWrapper>
        </Modal>
        <S.PhotoWrapper>
          {base64 && (
            <S.IconsAvatar>
              <S.EyeIcon onClick={() => setIsModalVisible(true)} />
              {!noDelete && <S.TrashAvatarIcon onClick={handleClear} />}
            </S.IconsAvatar>
          )}
          <ImgCrop
            rotate
            shape="round"
            modalTitle="Editar imagem"
            modalCancel="Cancelar"
          >
            <AntdUpload
              multiple={false}
              showUploadList={false}
              onChange={handleChangeAvatar}
              accept={accept}
            >
              <S.RoundPhoto url={base64 ? String(base64) : ''}>
                <S.UserIcon url={!!base64} />
                <S.EditWrapper type="button">
                  <S.PenIcon />
                </S.EditWrapper>
              </S.RoundPhoto>
            </AntdUpload>
          </ImgCrop>
        </S.PhotoWrapper>
      </>
    )
  }

  return (
    <S.Wrapper isActive={isActive}>
      <Dragger
        name="file"
        accept={accept}
        listType="picture"
        fileList={files}
        multiple
        onChange={handleChangeMultiple}
        isImageUrl={() => false}
        iconRender={() => <S.FileIcon />}
        showUploadList={{
          removeIcon: <S.TrashIcon />
        }}
      >
        <S.MultipleWrapper className={className}>
          <S.UploadIcon />
          <S.MultipleTitle>{label}</S.MultipleTitle>
        </S.MultipleWrapper>
      </Dragger>
      <S.Text>{underText}</S.Text>
    </S.Wrapper>
  )
}

export default Upload
