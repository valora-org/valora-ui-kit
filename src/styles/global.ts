import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'
import antDesignGlobal from './antDesign.global'

type GlobalStylesProps = {
  theme?: DefaultTheme; 
}

export const scrollBar = css`
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
  &:hover {
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.borderDisabledFields};
    }
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.neutral};
  }
`

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      overflow-y: hidden;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
  ${antDesignGlobal}
`

export default GlobalStyles