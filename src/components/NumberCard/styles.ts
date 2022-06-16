import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ isActive?: boolean }>`
  padding: 2px;
  background: white;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
  height: fit-content;
  width: fit-content;

  ${({ isActive, theme }) =>
    isActive &&
    css`
      background-image: ${`linear-gradient(120deg, ${theme.colors.primaryShiny}, ${theme.colors.primaryLuminous}, 42%, ${theme.colors.primaryLight})`};
    `}
`

export const Content = styled.div<{ isActive?: boolean }>`
  width: ${({ isActive }) => (isActive ? `166px` : '150px')};
  height: ${({ isActive }) => (isActive ? `136px` : '120px')};
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px 0;
  text-align: center;
  border: 2px solid transparent;

  &.vl-first-card-dashboard {
    width: ${({ isActive }) => (isActive ? `196px` : '180px')};
    height: ${({ isActive }) => (isActive ? `166px` : '150px')};

    @media (max-width: 1681px) {
      width: ${({ isActive }) => (isActive ? `176px` : '160px')};
      height: ${({ isActive }) => (isActive ? `146px` : '130px')};
    }

    @media (max-width: 1555px) {
      width: ${({ isActive }) => (isActive ? `166px` : '150px')};
      height: ${({ isActive }) => (isActive ? `136px` : '120px')};
    }

    @media (max-width: 1385px) {
      width: ${({ isActive }) => (isActive ? `146px` : '130px')};
      height: ${({ isActive }) => (isActive ? `126px` : '100px')};
    }

    @media (max-width: 1261px) {
      width: ${({ isActive }) => (isActive ? `136px` : '120px')};
      height: ${({ isActive }) => (isActive ? `116px` : '90px')};
    }

    @media (max-width: 1213px) {
      width: ${({ isActive }) => (isActive ? `126px` : '110px')};
      height: ${({ isActive }) => (isActive ? `106px` : '80px')};
    }

    @media (max-width: 1129px) {
      width: 156px;
      height: 90px;
    }

    @media (max-width: 1000px) {
      width: 136px;
      height: 90px;
    }
    @media (max-width: 985px) {
      width: 126px;
      height: 90px;
    }

    @media (max-width: 906px) {
      width: 116px;
      height: 80px;
    }

    @media (max-width: 838px) {
      width: 106px;
      height: 70px;
    }
  }

  &.vl-third-card-dashboard {
    width: 180px;
    height: 150px;

    @media (max-width: 1681px) {
      width: 160px;
      height: 130px;
    }

    @media (max-width: 1335px) {
      width: 150px;
      height: 120px;
    }

    @media (max-width: 963px) {
      width: 130px;
      height: 100px;
    }

    @media (max-width: 877px) {
      width: 120px;
      height: 90px;
    }

    @media (max-width: 837px) {
      width: 110px;
      height: 80px;
    }
  }
`

export const Number = styled.div`
  color: ${({ theme }) => theme.colors.textBold};
  font-size: 28px;
  font-weight: 500;
  min-width: 150px;
  text-align: center;
  padding: 0 2px;

  &.number-bold {
    font-weight: 600;
  }

  @media (max-width: 1681px) {
    font-size: 24px;
  }

  @media (max-width: 1247px) {
    font-size: 18px;
  }
  // 24
`

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 150px;
  text-align: center;
  padding: 0 2px;

  @media (max-width: 1681px) {
    font-size: 12px;
  }

  @media (max-width: 1000px) {
    white-space: pre-wrap;
  }
  // 12
`

export const CardGroup = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  gap: 0 30px;
  background: #f6f7f9;
`
