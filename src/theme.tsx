import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
  palette: {
    mode: 'light',
    text: {
      primary: '#1E2124',
      secondary: '#57606B',
      disabled: '#B6BCC4',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    primary: {
      main: '#3317CF',
      light: '#5F47EB',
      dark: '#220F8A',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FCB782',
      light: '#FDC69B',
      dark: '#FA8C38',
      contrastText: '#1E2124',
    },
    error: {
      main: '#A41928',
      dark: '#77121D',
      light: '#D02033',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#FAAD14',
      light: '#FBBF46',
      dark: '#D79005',
      contrastText: '#231F20',
    },
    info: {
      main: '#1346CE',
      light: '#285DEB',
      dark: '#0F369F',
      contrastText: '#ffffff',
    },
    success: {
      main: '#2E7623',
      dark: '#1F4F17',
      light: '#3D9D2F',
      contrastText: '#FFFFFF',
    },
    grey: {
      '50': '#fafafa',
      '100': '#F4F5F6',
      '200': '#ECEEF0',
      '300': '#DDE0E3',
      '400': '#B6BCC4',
      '500': '#949DA8',
      '600': '#697381',
      '700': '#57606B',
      '800': '#3B4149',
      '900': '#1E2124',
      A100: '#D1D4D9',
      A200: '#A1A9B3',
      A400: '#57606B',
      A700: '#2B2F35',
    },
    divider: '#DDE0E3',
  },
  typography: {
    fontFamily: "Whitney, sans-serif",
    h1: {
      fontFamily: "Ubuntu, sans-serif",
      fontSize: '96px',
      fontWeight: 400,
      letterSpacing: '-1.5px',
      lineHeight: '112px',
    },
    h2: {
      fontFamily: "Ubuntu, sans-serif",
      fontSize: '60px',
      fontWeight: 400,
      letterSpacing: '-0.5px',
      lineHeight: '72px',
    },
    h3: {
      fontFamily: "Ubuntu, sans-serif",
      fontSize: '48px',
      fontWeight: 400,
      letterSpacing: '0px',
      lineHeight: '56px',
    },
    h4: {
      fontFamily: "Ubuntu, sans-serif",
      fontSize: '34px',
      fontWeight: 400,
      letterSpacing: '0.25px',
      lineHeight: '42px',
    },
    h5: {
      fontFamily: "Ubuntu, sans-serif",
      fontSize: '24px',
      fontWeight: 400,
      letterSpacing: '0px',
      lineHeight: '32px',
    },
    h6: {
      fontFamily: "Ubuntu, sans-serif",
      fontSize: '20px',
      fontWeight: 500,
      letterSpacing: '0.15px',
      lineHeight: '32px',
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 350,
      letterSpacing: '0.15px',
      lineHeight: '28px',
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: 350,
      letterSpacing: '0.1px',
      lineHeight: '22px',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 350,
      letterSpacing: '0.15px',
      lineHeight: '24px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 350,
      letterSpacing: '0.17px',
      lineHeight: '20px',
    },
    button: {
      fontFamily: "Ubuntu, sans-serif",
      fontWeight: 500,
      large: {
        fontSize: '15px',
        letterSpacing: '0.46px',
        lineHeight: '26px',
      },
      medium: {
        fontSize: '14px',
        letterSpacing: '0.4px',
        lineHeight: '24px',
      },
      small: {
        fontSize: '13px',
        letterSpacing: '0.46px',
        lineHeight: '22px',
      },
      xSmall: {
        fontSize: '11px',
        letterSpacing: '0.46',
        lineHeight: '20px',
      }, textTransform: 'none',
    },
    caption: {
      fontSize: '14px',
      fontWeight: 350,
      lineHeight: '20px',
      letterSpacing: '0.17px',
    },
    overline: {
      fontSize: '14px',
      fontWeight: 350,
      lineHeight: '20px',
      letterSpacing: '0.17px',
    },
  },
  spacing: 8
});

export default theme;
