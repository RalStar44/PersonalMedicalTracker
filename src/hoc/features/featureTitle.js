/**
 * @file featureTitle.js 
 */

import React, { useEffect } from 'react';

/**
 * @description Higher Order Component (HOC) that sets the document title based on the app configuration.
 * @param {React.Component} WrappedTitleComponent - The component to be wrapped.
 * @returns {React.Component} - The wrapped component with the updated document title.
 */
const featureTitle = (WrappedTitleComponent) => {
  const FeatureTitle = (props) => {

    const { config } = props;
    const title = config.App.title;
   
    useEffect(() => {
      document.title = title;
    }, [title]);

    return <WrappedTitleComponent {...props} />;
  };

  return FeatureTitle;
};

export default React.memo(featureTitle);
