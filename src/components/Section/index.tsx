import * as S from './styles'

export type SectionTypes = {
  title: string
  description?: string
  children: React.ReactNode
  bottomMessage?: string
  colorBottomMessage?: 'default' | 'info' | 'error' | 'success' | 'warning'
}

const Section = ({
  title,
  description,
  children,
  bottomMessage,
  colorBottomMessage = 'default'
}: SectionTypes) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {description && <S.Description>{description}</S.Description>}
      {children}
      {bottomMessage && (
        <S.Description color={colorBottomMessage}>
          {bottomMessage}
        </S.Description>
      )}
    </S.Wrapper>
  )
}

export default Section
