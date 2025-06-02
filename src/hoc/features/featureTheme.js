// featureTheme.js
import React, { createContext, useContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {master as theme} from '../../stylings/themes/master';

/**
 * Context for providing the theme to wrapped components.
 * @type {React.Context}
 */
const ThemeContext = createContext(theme); // Provide the default theme

/**
 * Custom hook for accessing the theme from the context.
 * @returns {object} The theme object.
 */
const useTheme = () => useContext(ThemeContext);

/**
 * Higher Order Component (HOC) that provides the theme through the `ThemeProvider`.
 * @param {React.Component} WrappedComponent - The component to be wrapped.
 * @returns {React.Component} - The wrapped component.
 */
const featureTheme = (WrappedComponent) => {
  /**
   * The wrapper component that applies the theme to the wrapped component.
   * @param {object} props - Props to be passed to the wrapped component.
   * @returns {React.Component} - The wrapped component with the theme applied.
   */
  const FeatureTheme = (props) => {
    const contextTheme = useTheme(); // Use the theme from context

    return (
      <ThemeProvider theme={contextTheme}>
        <WrappedComponent {...props} />
      </ThemeProvider>
    );
  };

  return FeatureTheme;
};

export default React.memo(featureTheme);
