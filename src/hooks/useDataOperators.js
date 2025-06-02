/**
 * @description Custom hook to fetch and manage data operators based on the provided data type.
 * @param {string} dataType - The type of data operators to fetch.
 * @returns {object} - An object containing data operators, loading state, and error state.
 */
import { useState, useEffect } from 'react';
import { operatorFactory, fetchDataOperators } from '../data_access_layer/operator_factory';

const useDataOperators = (dataType) => {
  const [dataOperators, setDataOperators] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDataOperators(dataType, setDataOperators, setIsLoading, setError);
  }, [dataType]);

  return {
    data: dataOperators,
    isLoading,
    error
  };
};

export default React.memo(useDataOperators);
