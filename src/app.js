/**
 * @description Pseudo object for representing a menu item configuration.
 * @typedef {Object} MenuItem - Represents a menu item configuration.
 * @property {string} label - The label for the menu item.
 * @property {string} icon - The icon for the menu item.
 * @property {string} dataType - The data type associated with the menu item.
 * @property {string} route - The route for the menu item.
 * @property {JSX.Element} component - The React component to render when this menu item is selected.
 * @property {boolean} isSecure - Indicates if the menu item requires authentication.
 */

/**
 * @file app.js
 */

import React from 'react';
import Routing from './hoc/routing';

/**
 * @description Root component of the application.
 *
 * @param {object} configuration - Holds configuration details for the application.
 * @param {MenuItem[]} configuration.Menu - The configuration for the application's menu.
 *
 * @returns {JSX.Element} The root component of the application.
 */
const App = (props) => {
  const menu =  props.configuration.Menu;

  return <Routing menu={menu} />;
};

export default App;
