import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sx: true
    sm: true
    md: true
    lg: true
    xl: true
    xl2: true
  }

  interface CommonColors {
    mainBg: string
    firstBoxBg: string

    headerBg: string
    headerBorder: string

    firstTypography: string
    secondTypography: string

    firstButton: string
    secondButton: string
    thirdButton: string

    firstDivider: string
    secondDivider: string

    firstSectionBg: string
    secondSectionBg: string
  }

  // interface Palette {
  //   mainBg: PaletteColor;
  // }

  // interface PaletteOptions {
  //   mainBg: PaletteColorOptions;
  // }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    // mainBg: true;
  }
}

const MuiThemeProvider = ({ children }: any) => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sx: 450,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xl2: 1536,
      }
    },
    palette: {
      mode: "dark",
      common: {
        black: '#000',
        white: '#fff',

        mainBg: '#ffffff',
        firstBoxBg: '#F6F6F6',

        headerBg: '#F6F6F6',
        headerBorder: '#D3D8DD',

        firstTypography: '#181F30',
        secondTypography: '#6E757D',

        firstButton: '#FFC000',
        secondButton: '#222222',
        thirdButton: '#E7E7E7',

        firstDivider: '#D3D8DD',
        secondDivider: '#D3D8DD',

        firstSectionBg: '#EFF0F1',
        secondSectionBg: '#2475FF',
      },

      // mainBg: { main: '#141416', light: '#24262f', contrastText: "#fff" },
      // primary: { main: '#fff', light: '#f55b00', dark: '#1e0500', contrastText: 'rgba(0,0,0,0.87)' },
    },
    typography: {
      allVariants: { color: "#181F30" },
      htmlFontSize: 16,
      fontSize: 16,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 800,

      fontFamily: "'Aeonik', ui-sans-serif, system-ui"
    },
  })

  theme.typography.h1 = {
    ...theme.typography.h1,

    fontSize: 60,
    fontWeight: 500,

    [theme.breakpoints.down('lg')]: {
      fontSize: 50,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 40,
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 35,
    },
  }

  theme.typography.h2 = {
    ...theme.typography.h2,

    fontSize: 55,
    fontWeight: 500,

    [theme.breakpoints.down('lg')]: {
      fontSize: 45,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 35,
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
    },
  }

  theme.typography.h3 = {
    ...theme.typography.h3,

    fontSize: 35,
    fontWeight: 500,

    [theme.breakpoints.down('lg')]: {
      fontSize: 25,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
  }

  theme.typography.h4 = {
    ...theme.typography.h4,

    fontSize: 30,
    fontWeight: 500,

    [theme.breakpoints.down('lg')]: {
      fontSize: 25,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
  }

  theme.typography.h5 = {
    ...theme.typography.h5,

    fontSize: 24,
    fontWeight: 500,

    [theme.breakpoints.down('lg')]: {
      fontSize: 20,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
  }

  theme.typography.h6 = {
    ...theme.typography.h6,

    fontSize: 20,
    fontWeight: 500,

    [theme.breakpoints.down('lg')]: {
      fontSize: 16,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  }

  theme.typography.body1 = {
    ...theme.typography.body1,

    fontSize: 16,
    fontWeight: 500,

    [theme.breakpoints.down('lg')]: {
      fontSize: 15,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  }

  theme.typography.body2 = {
    ...theme.typography.body2,

    fontSize: 14,
    fontWeight: 500,
  }

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export { MuiThemeProvider };