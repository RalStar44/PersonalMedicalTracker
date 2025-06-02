// #file: Prescription.js
// #purpose: Represents a prescription medication that extends MedicationBase.

/**
 * Prescription class extends MedicationBase to represent prescription medications.
 * It includes additional properties specific to prescriptions such as prescribedBy,
 * refillCount, startDate, endDate, and instructionsForTaking.
 * @class Prescription
 * @extends MedicationBase
 */
import { MedicationBase } from "./MedicationBase";

class Prescription extends MedicationBase {
  
  /**
   * Creates an instance of the Prescription model.
   * @param {Object} params - The prescription properties.
   * @param {string} params.name - The name of the medication.
   * @param {string} params.dose - The dosage information.
   * @param {string} params.schedule - The schedule for taking the medication.
   * @param {Array<string>} [params.sideEffects=[]] - Potential side effects.
   * @param {Array<string>} [params.activeIngredients=[]] - Active ingredients in the medication.
   * @param {string} params.prescribedBy - The healthcare provider who prescribed the medication.
   * @param {number} params.refillCount - The number of refills allowed for this prescription.
   * @param {string} params.startDate - The date the prescription starts (ISO date format).
   * @param {string} params.endDate - The date the prescription ends (ISO date format).
   * @param {string} params.instructionsForTaking - Instructions for how to take the medication.
   */
  constructor({
    name,
    dose,
    schedule,
    sideEffects = [],
    activeIngredients = [],
    prescribedBy,
    refillCount,
    startDate,
    endDate,
    instructionsForTaking
  }) {
    super({ name, dose, schedule, sideEffects, activeIngredients });

    // Handle Date conversion and validation for start and end dates
    this.prescribedBy = prescribedBy;
    this.refillCount = refillCount;
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
    this.instructionsForTaking = instructionsForTaking; // Store the instructions

    // Validation
    this.validate();
  }

  /**
   * Converts the Prescription object to a JSON-compatible format.
   * @returns {Object} The prescription object in JSON format.
   */
  toJSON() {
    return {
      ...super.toJSON(),
      prescribedBy: this.prescribedBy,
      refillCount: this.refillCount,
      startDate: this.startDate.toISOString(),
      endDate: this.endDate.toISOString(),
      instructionsForTaking: this.instructionsForTaking // Include in JSON output
    };
  }

  /**
   * Validates that the prescription has all required properties.
   * @throws {Error} Throws an error if any required properties are missing.
   */
  validate() {
    super.validate(); // Validate basic medication properties
    if (!this.prescribedBy || !this.refillCount || !this.startDate || !this.endDate || !this.instructionsForTaking) {
      throw new Error('Prescription medication must have prescribedBy, refillCount, startDate, endDate, and instructions for taking.');
    }
  }
}

export { Prescription };
