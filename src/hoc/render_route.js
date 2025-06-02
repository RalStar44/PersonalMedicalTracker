/**
 * @file render_route.js
 * @description controls logic for thype of route to render
 * 
 */

import React from 'react';
import { Route } from 'react-router-dom';
import SecureRoute from './secure_route';

/**
 * 
 * @param {React.Component} Element React component to render
 * @param {Boolean} isSecure  whether route should be render as standard or seucre
 * @param {String} path  location within the application
 * @returns {React.Component} 
 */
const renderRoute = ({ element: Element, isSecure, path }) => {

  return isSecure ? SecureRoute(Element, path) :
    <Route path={path} component={Element} />;

};

export default renderRoute;