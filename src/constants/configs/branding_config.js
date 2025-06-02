/**
 * @file branding_config.js
 */

let Logo = null; // Assign Logo to null initially

/**
 * Holds the imported Logo component used as the logo.
 * @type {React.Component}
 * @property {React.Component} Logo - Imported image used as the logo.
 */

// Import the Logo only if it's needed (uncomment the import line and Logo assignment)
// import {someIcon as ImportedLogo} from "path/to/icons/someIcon";
// Logo = ImportedLogo;

/** 
 * Branding Configuration Object.
 * @type {Object} brandingConfig
 * @property {string} primaryColor - Primary color for branding (in hex or any valid CSS color format).
 * @property {string} secondaryColor - Alternate color for branding (in hex or any valid CSS color format).
 * @property {React.Component} logo - Image component used as the logo.
 */

const brandingConfig = {
    primaryColor: "#007BFF",
    secondaryColor: "#6C757D",
    logo: Logo,
};

export default brandingConfig;
