import { themes as defaultThemes } from '@storybook/theming';

export const palette = {
  link: '#0066CC',
  primary: {
    base: '#0274E6',
    fore: '#ffffff',
  },
  secondary: {
    base: '#09182F',
    fore: '#ffffff',
  },
  danger: { 
    base: '#B92D28',
    fore: '#ffffff',
  },
  neutral: {
    white: '#ffffff',
    light: '#f5f5f5',
    base: '#DDDDDD',
    dark: '#757575',
    fore: '#212121',
  },
};

const customSharedTheme = {
  primaryFg: palette.white,
  primaryBg: palette.blue,
  warningFg: palette.white,
  warningBg: palette.red,
  link: palette.link,
  palette: palette,
};

const customLightTheme = {
  secondaryFg: palette.darkgray,
  secondaryBg: palette.lightgray,
  ...customSharedTheme,
};

const customDarkTheme = {
  secondaryFg: palette.darkgray,
  secondaryBg: palette.lightgray,
  ...customSharedTheme,
}

export default {
  light: {
    ...defaultThemes.normal,
    ...customLightTheme,
    ...customSharedTheme,
  },
  dark: {
    ...defaultThemes.dark,
    ...customDarkTheme,
    ...customSharedTheme,
  },
};
