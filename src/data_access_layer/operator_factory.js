/**
 * Factory function to create the appropriate data operator based on the data type.
 * @param {string} dataType - The type of data operators to fetch.
 * @returns {function} - The data operator function.
 * @throws {Error} - If the provided data type is invalid.
 */
import dataOperatorFunctions from './data_operator_functions';

const operatorFactory = (dataType) => {
  const dataRetriever = dataOperatorFunctions[dataType];

  if (dataRetriever) {
    return dataRetriever;
  } else {
    throw new Error(`Invalid data type: ${dataType}`);
  }
};

/**
 * Fetch data operators and update state accordingly.
 * @param {string} dataType - The type of data operators to fetch.
 * @param {function} setDataOperators - Function to set the data operators state.
 * @param {function} setIsLoading - Function to set the loading state.
 * @param {function} setError - Function to set the error state.
 * @returns {void}
 */
const fetchDataOperators = async (dataType, setDataOperators, setIsLoading, setError) => {
  setIsLoading(true);

  try {
    const dataRetriever = operatorFactory(dataType);
    const result = await dataRetriever();
    setDataOperators(result);
    setError(null);
  } catch (error) {
    setError(error);
  }

  setIsLoading(false);
};

export { operatorFactory, fetchDataOperators };
