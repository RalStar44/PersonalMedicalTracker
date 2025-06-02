/**
 * @file index.js
 * @description The main entry point to the application.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import featureTitle from './hoc/features/featureTitle';
import featureLogging from './hoc/features/featureLogging';
import featureTheme from './hoc/features/featureTheme';
import featureContextProvider from './hoc/features/featureContextProvider';
import applyFeatures from './hoc/loadFeatures';
import configs from './config';

/**
 * Enhance the App component with additional features using applyFeatures.
 * @type {React.Component}
 */
const EnhancedApp = applyFeatures(App, [featureTitle, featureLogging, featureContextProvider, featureTheme]);

// Get the root element from the HTML document.
const rootElement = document.getElementById('root');

/**
 * @description Render the EnhancedApp component into the root element, passing the configuration as a prop.
 * @prop {object} configuration holds all configuration data
*/
ReactDOM.render(<EnhancedApp configuration={configs} />, rootElement);
