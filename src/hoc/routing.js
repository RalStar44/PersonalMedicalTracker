/**
 * @file routing.js
 * @description Handles the rendering of routes based on the provided menu configuration.
 * 
 */

import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { renderRoute } from './render_route';

/**
 * 
 * @param {Object} props - Component props.
 * @param {MenuItem[]} props.menu - The configuration for the application's menu.
 * 
 * @returns {JSX.Element} Rendered routes within a Router component.
 */
const Routing = (props) => {
  const { menu } = props;

  return (
    <Router>
      <Switch>
        {menu.map((route) => (
          renderRoute(route)
        ))}
      </Switch>
    </Router>
  );
};

export default React.memo(Routing);
