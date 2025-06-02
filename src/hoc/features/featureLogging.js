// featureLogging.js
import React, { useEffect } from 'react';

/**
 * Higher Order Component (HOC) that adds logging for component mounting and unmounting.
 * @param {React.Component} WrappedComponent - The component to be wrapped.
 * @returns {React.Component} - The wrapped component with logging added.
 */
const featureLogging = (WrappedComponent) => {
  /**
   * The wrapper component that adds logging for component mounting and unmounting.
   * @param {object} props - Props to be passed to the wrapped component.
   * @returns {React.Component} - The wrapped component with logging added.
   */
  const FeatureLogging = (props) => {
    /**
     * Use the `useEffect` hook to log when the component is mounted.
     * Also, return a cleanup function to log when the component is unmounted.
     */
    useEffect(() => {
      console.log('Component is mounted');

      return () => {
        console.log('Component is unmounted');
      };
    }, []);

    // Render the wrapped component with added logging.
    return <WrappedComponent {...props} />;
  };

  return FeatureLogging;
};

export default React.memo(featureLogging);
