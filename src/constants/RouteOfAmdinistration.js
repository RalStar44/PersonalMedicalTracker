// file: RouteOfAdministration.js
// purpose: This file defines the different routes of administration for medications,
//          specifying how a medication is to be administered or taken.

/**
 * @enum {string}
 * @description Represents the different routes of medication administration.
 * These values should be used to specify the method by which a medication is to be taken.
 * 
 * @readonly
 * @property {string} ORAL - Medication taken by mouth.
 * @property {string} TOPICAL - Medication applied directly to the skin.
 * @property {string} INHALED - Medication taken through the respiratory system (e.g., inhalers).
 * @property {string} INJECTABLE - Medication delivered via injection.
 */
const RoutesOfAdministration = Object.freeze({
    ORAL: "oral",           // Taken by mouth (e.g., pills, tablets)
    TOPICAL: "topical",     // Applied to the skin (e.g., creams, ointments)
    INHALED: "inhaled",     // Inhaled into the lungs (e.g., inhalers, nebulizers)
    INJECTABLE: "injectable", // Delivered through injection (e.g., shots)
  });
  
  export { RoutesOfAdministration };
  