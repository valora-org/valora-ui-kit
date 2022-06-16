import "antd/dist/antd.css";
const primaryColor = '#7cafb0'
const primaryHoverColor = '#BDC6D2'
const errorColor = '#DC4357'
const borderColor = '#E5E5E5'

export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem',
    fieldsBase: `solid 1.3px ${borderColor}`,
    fieldsError: `solid 1.3px ${errorColor}`,
    fieldsFocus: `solid 1.3px ${primaryColor}`,
    fieldsHover: `solid 1.3px ${primaryHoverColor}`
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    secundary:
      "Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    icon:
      "Linearicons, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem'
    }
  },
  colors: {
    primary: primaryColor,
    secondary: '#91c36e',
    secondary10: '#80B565',
    primaryHover: '#698E97',
    primaryShiny: '#c0dcdc',
    primaryLuminous: '#98cece',
    primaryLight: '#8dbdbd',
    primary10: '#739EA4',
    primary20: 'rgba(105, 142, 151, 1)',
    primary20Bg: 'rgba(94, 187, 173, 0.2)',
    primary40: '#57707E',
    primary60: 'rgba(69, 83, 100, 1)',
    primaryFocus: '#455364',
    primaryActive: 'rgba(124, 175, 176, 0.25)',
    clearPrimary: 'rgba(124, 175, 176, 0.2)',
    clearPrimary25: 'rgba(165, 226, 217, 0.25)',
    clearPrimary75: 'rgba(165, 226, 217, 0.75)',
    darkenPrimary: '#5a8687',
    error: errorColor,
    danger: 'rgba(203, 98, 117, 1)',
    dangerBg: 'rgba(203, 98, 117, 0.15)',
    warning: '#E4CA63',
    warningBg: 'rgb(201, 172, 98, 0.15)',
    info: '#68A3C7',
    infoText: 'rgb(98, 191, 201, 1)',
    infoBg: 'rgb(98, 191, 201, 0.15)',
    success: '#00A289',
    activeBg: 'rgba(27, 199, 79, 0.08)',
    activeText: '#1BC74F',
    textMedium: '#B0BAC9',
    bgMedium: 'rgba(194, 198, 208, 0.13)',
    textIntense: '#6D767E',
    textStrong: '#87869A',
    textHardStrong: '#444A4F',
    textBold: '#363636',
    borderFields: borderColor,
    borderFocusFields: primaryHoverColor,
    borderDisabledFields: '#E1E1E1',
    mainBg: '#06092B',
    lightBg: '#F2F2F2',
    white: 'white',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    red: '#FF6347',
    progressColor: '#f8f8f8',
    progressShadow: 'rgba(0, 0, 0, 0.08)',
    baseColorNav: '#f4f5f7e6',
    baseColorBlack2: '#69707f',
    baseColorBlue: '#2e5bff',
    baseColorGray: '#bfc5d2',
    baseColorBlack3: '#8798ad',
    baseColorWhite: '#ffffff',
    baseRGBColorWhite: '255, 255, 255',
    baseRGBColorBlack: '0, 0, 0',
    baseColorFullBlack: '#000000',
    baseColorBlack: '#2e384d',
    baseColorGray2: '#f4f6fc',
    baseColorGray3: '#eef3f5',
    baseColorGreen: '#33ac2e',
    baseColorYellow: '#f7c137',
    baseColorTeal: '#00c1d4',
    baseColorRed: '#d63649',
    baseColorRedDark: '#C30023',
    baseColorPurple: '#8c54ff',
    lightPeriwinkle: '#d6dfff',
    cloudyBlue: '#b0bac9',
    clearGray: '#E5E6E9',
    neutral: '#CBCBCB',
    neutral05: '#EEF0F2',
    tomato: '#e74133',
    blueSide: '#1a4679',
    baseColorBlue20: 'rgba(46, 91, 255, 0.2)',
    color01: '#7fffff',
    divider: '#c8c9cc',
    baseColorRed10: 'rgba(214, 54, 73, 0.1)',
    baseColorGreen15: 'rgba(80, 173, 48, 0.15)',
    baseColorBlue10: 'rgba(46, 91, 255, 0.1)',
    baseColorYellow10: 'rgba(247, 193, 55, 0.1)',
    baseColorBlack10: 'rgba(128,128,128,0.1)',
    baseColorWhite10: 'rgba(255,255,255,0.1)',
    tooltip: 'rgb(181, 181, 181)',
    linearBackgroundPrimary:
      'linear-gradient(120deg, #c0dcdc, #98cece 42%, #8dbdbd);',
    nonSelected: '#6d6d6d',
    navBarBg: '#f5f6f8',
    borderNavBarBg: '#c8c8c8',
    borderTable: '#a0a0a0',
    borderLine: '#EEF0F2',
    notification: {
      info: '#68a3c7',
      success: '#00d1b2',
      warning: '#f9dd72',
      danger: '#dc3545'
    }
  },
  spacings: {
    xxxsmall: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  responsive: {
    limiterDesktop: '1190px',
    mobile: '991px'
  },
  zindex: {
    searchSelect: 200,
    header: 1000,
    iconSideBar: 1500
  }
} as const