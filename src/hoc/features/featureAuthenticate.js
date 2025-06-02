/**
 * @file Authentication.js
 */

import React from "react";
import { Container } from "@mui/material";
import useAuthentication from "../hooks/useAuthentication";

/**
 * Higher Order Component (HOC) that handles authentication logic
 * and renders either a login or logout component based on user's authentication status.
 *
 * @param {React.Component} AuthenticatedComponent - The component to be wrapped.
 * @returns {React.Component} - The wrapped component with authentication handling added.
 */
const featureAuthentication = (AuthenticatedComponent) => {
  /**
   * The wrapper component that handles authentication logic
   * and renders the wrapped component based on user's authentication status.
   *
   * @param {object} props - Props to be passed to the wrapped component.
   * @returns {JSX.Element} - The rendered authentication component.
   */
  const Authentication = (props) => {
    const { isLoggedIn } = useAuthentication();

    return (
      <Container>
        {isLoggedIn ? <Logout /> : <Login />}
        <AuthenticatedComponent {...props} />
      </Container>
    );
  };

  return Authentication;
};

export default featureAuthentication;
