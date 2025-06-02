/**
 * @file not_found.js
 * @description default file to handle routes that are not in the configuration
 */

/**
 * Component to display when a route is not found.
 *
 * @returns {JSX.Element} The component to display for 404 Not Found routes.
 */
const NotFound = () => {
    return (
      <div>
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    );
  };