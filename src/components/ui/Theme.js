import { createTheme } from '@material-ui/core';

const arcBlue = '#0b72b9';
const arcOrange = '#ffba60';
const arcGrey = '#868686';
export default createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: arcBlue,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: arcBlue,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: 'white',
    },
    body1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: arcGrey,
    },
    learnButton: {
      borderColor: arcBlue,
      color: arcBlue,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    }
  },
  overrides:{
    MuiInputLabel: {
      root: {
        color: arcBlue,
        fontSize: '1rem'
      }
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`
        },
        "&:hover:not($disabled):not($focusd):not($error):before": {
          borderBottom: `2px solid ${arcBlue}`

        }
      }
    }
  }
});
