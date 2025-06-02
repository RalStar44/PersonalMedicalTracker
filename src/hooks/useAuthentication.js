/**
 * @file useAuthentication.js
 * @description Custom hook for handling ahtenication state.
 */

import { useState } from 'react';

/**
 * A custom hook for handling user authentication state.
 *
 * @returns {Object} An object containing authentication state and functions.
 * @property {boolean} isLoggedIn - A boolean indicating whether the user is logged in or not.
 * @property {Function} login - A function to perform the login logic.
 * @property {Function} logout - A function to perform the logout logic.
 */
const useAuthentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /**
   * Perform the login logic.
   */
  const login = () => {
    // Perform login logic
    setIsLoggedIn(true);
  };

  /**
   * Perform the logout logic.
   */
  const logout = () => {
    // Perform logout logic
    setIsLoggedIn(false);
  };

  return {
    isLoggedIn,
    login,
    logout,
  };
};

export default useAuthentication;
