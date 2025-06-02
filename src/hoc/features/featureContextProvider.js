/**
 * @file featureContextProvider.js
 * @description Provides context data through a context provider.
 */

import React, { createContext } from 'react';
import useDataOperators from '../../hooks/useDataOperators';

/**
 * Context for providing data to wrapped components.
 * @type {React.Context}
 */
const DataContext = createContext();

/**
 * Higher Order Component (HOC) that provides context data through a context provider.
 * @param {React.Component} WrappedComponent - The component to be wrapped.
 * @param {string} contextType - The type of context data to provide.
 * @returns {React.Component} - The wrapped component with context data provided.
 */
const featureDataContextProvider = (WrappedComponent, contextType) => {
    /**
     * The wrapper component that provides context data through a context provider.
     * @param {object} props - Props to be passed to the wrapped component.
     * @returns {React.Component} - The wrapped component with context data provided.
     */
    const FeatureContextProvider = (props) => {
        // Use the useDataOperators hook with the provided contextType
        const { data: dataOperators, isLoading, error } = useDataOperators(contextType);

        // Pass the dataOperators, isLoading, and error to the WrappedComponent
        return (
            // Use the DataContextProvider to provide the context data
            <DataContext.Provider value={dataOperators}>
                <WrappedComponent
                    contextLoading={isLoading}
                    contextError={error}
                    {...props}
                />
            </DataContext.Provider>
        );
    };

    return FeatureContextProvider;
};

export default React.memo(featureDataContextProvider);
