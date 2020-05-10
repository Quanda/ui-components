import React from 'react';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { addParameters } from '@storybook/react'; // or any other type of storybook
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

// Sets custom component UI theme based on dark/light modes 
// see; https://github.com/hipstersmoothie/storybook-dark-mode#story-integration
const ThemeWrapper = props => {
  // render your custom theme provider
  return (
    <ThemeProvider theme={useDarkMode() ? theme.dark : theme.light}>
      {props.children}
    </ThemeProvider>
  );
}
addDecorator(storyFn => <ThemeWrapper>{storyFn()}</ThemeWrapper>);

/* Accessibility addon */ 
addDecorator(withA11y);

/* Input (knob) controls */ 
addDecorator(withKnobs);

/** PARAMETERS */
addParameters({
  options: {
    showRoots: true,
  },
})


