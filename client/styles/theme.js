import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#006644', // Kenyan deep green
      light: '#3d8b5f',
      dark: '#00442e',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFD700', // Kenyan gold
      light: '#ffe04d',
      dark: '#e6c200',
      contrastText: '#000000',
    },
    accent: {
      main: '#C8102E', // Kenyan red
      light: '#e33b4f',
      dark: '#a00d23',
      contrastText: '#FFFFFF',
    },
    earth: {
      main: '#8B4513', // African earth tone
      light: '#a05a2b',
      dark: '#6b360d',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#D32F2F',
      light: '#EF5350',
      dark: '#C62828',
    },
    warning: {
      main: '#FFA000',
      light: '#FFC107',
      dark: '#FF8F00',
    },
    success: {
      main: '#2E7D32',
      light: '#4CAF50',
      dark: '#1B5E20',
    },
    text: {
      primary: '#1A1A1A', // Richer dark color for better readability
      secondary: '#4A4A4A',
      disabled: '#B0BEC5',
    },
    background: {
      default: '#F8F8F8', // Slightly warmer white
      paper: '#FFFFFF',
    },
    divider: 'rgba(0, 102, 68, 0.12)', // Semi-transparent primary color
  },
  typography: {
    fontFamily: [
      '"Ubuntu"',
      '"Roboto"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 800,
      fontSize: '3rem',
      lineHeight: 1.2,
      color: '#006644',
      letterSpacing: '-0.5px',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.3,
      color: '#006644',
      letterSpacing: '-0.25px',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
      color: '#00442e',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.5,
      color: '#1A1A1A',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      color: '#1A1A1A',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#1A1A1A',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7, // Slightly more spacing for readability
      color: '#1A1A1A',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.7,
      color: '#4A4A4A',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.25px',
      fontSize: '0.9375rem',
    },
    subtitle1: {
      color: '#4A4A4A',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    subtitle2: {
      color: '#6A6A6A',
      fontWeight: 400,
      fontSize: '0.8125rem',
    },
  },
  shape: {
    borderRadius: 12, // Slightly larger radius for modern look
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
          fontWeight: 600,
          boxShadow: 'none',
          transition: 'all 0.2s ease',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.12)',
            transform: 'translateY(-1px)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #006644 0%, #3d8b5f 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #00442e 0%, #006644 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #FFD700 0%, #ffe04d 100%)',
          color: '#000000',
          '&:hover': {
            background: 'linear-gradient(135deg, #e6c200 0%, #FFD700 100%)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          border: 'none',
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          borderRadius: 16,
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #006644 0%, #00442e 100%)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          padding: '0 24px',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#C8102E',
          fontWeight: 600,
          textDecoration: 'none',
          transition: 'color 0.2s ease',
          '&:hover': {
            textDecoration: 'underline',
            color: '#a00d23',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 16,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 102, 68, 0.16)',
          height: '2px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '12px !important',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#006644',
          },
        },
        notchedOutline: {
          borderWidth: '2px',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          '&:before, &:after': {
            borderBottom: 'none',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
        colorPrimary: {
          backgroundColor: 'rgba(0, 102, 68, 0.12)',
          color: '#006644',
        },
        colorSecondary: {
          backgroundColor: 'rgba(255, 215, 0, 0.2)',
          color: '#8B4513',
        },
      },
    },
  },
});

export default theme;