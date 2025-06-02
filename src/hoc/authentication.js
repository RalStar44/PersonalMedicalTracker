/**
 * @file Authentication.js
 */

import React from "react";
import { Container } from "@mui/material";
import useAuthentication from "../hooks/useAuthentication";

/**
 * @description Authentication component that renders either a login or logout component based on user's authentication status.
 * @type {JSX.Element} Authenciation
 * @returns {JSX.Element} The rendered authentication component.
 */
const Authentication = () => {
  const { isLoggedIn } = useAuthentication();

  return (
    <Container>
      {isLoggedIn ? <Logout /> : <Login />}
    </Container>
  );
};

export default React.memo(Authentication);
