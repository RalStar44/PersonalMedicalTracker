/**
 * @file loadFeatures.js
 * @description hig ordered componet to load global features for the application
 * /

/**
 * @param {React.Component} Component 
 * @param  {...any} features 
 * @returns {React.Component}
 */

const applyFeatures = (Component, ...features) => {
    return features.reduce((wrappedComponent, feature) => feature(wrappedComponent), Component);
  };