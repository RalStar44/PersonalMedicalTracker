/**
 * @file SecureRoute.js
 * @description A higher-order component for handling secure routes.
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuthentication from '../hooks/useAuthentication';

/**
 * SecureRoute Component.
 *
 * @description This component conditionally renders a Route or a Redirect based on the user's authentication status.
 *
 * @param {Object} props - Component props.
 * @param {React.Component} props.component - The component to render for the route.
 * @param {string} props.path - The path for the route.
 *
 * @returns {JSX.Element} Rendered component or Redirect.
 */
const SecureRoute = ({ component: Component, path }) => {
    const {isAuthenticated: isLoggedIn} = useAuthentication();

    return isLoggedIn ?
        <Route path={path} element={Component} /> :
        <Redirect to="/login" />;
};

export default SecureRoute;
