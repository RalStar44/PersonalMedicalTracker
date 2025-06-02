// #file: MedicationBase.js
// #purpose: Extends BaseModel into a base class for recording over-the-counter and prescription medicines.

/**
 * MedicationBase model class for tracking over-the-counter and prescription medicines.
 * This serves as a base class for both medication types.
 * @class MedicationBase
 * @extends BaseModel
 */
import { BaseModel } from "./BaseModel";

class MedicationBase extends BaseModel {

  /**
   * Creates an instance of the MedicationBase model.
   * @param {Object} params - The medication properties.
   * @param {string} params.name - The name of the medication (e.g., "Aspirin").
   * @param {string} params.dose - The dosage information (e.g., "500mg").
   * @param {string} params.schedule - The schedule for taking the medication (e.g., "Twice a day").
   * @param {string} params.administer - The way the medication is to be administer/taken. Should be of enumeration RouteOfAdministration. 
   * @param {Array<string>} [params.sideEffects=[]] - A list of potential side effects (e.g., ["Nausea"]).
   * @param {Array<string>} [params.activeIngredients=[]] - A list of active ingredients in the medication (e.g., ["Acetylsalicylic acid"]).
   * @param {string} [params.notes] - Any additional information or instructions regarding the medication (optional).
   */
  constructor({ name, dose, schedule, administer, sideEffects = [], activeIngredients = [], notes }) {
    super(); // Call the parent class constructor (BaseModel)
    this.name = name;
    this.dose = dose;
    this.schedule = schedule;
    this.administer= administer
    this.sideEffects = sideEffects;
    this.activeIngredients = activeIngredients;
    this.notes = notes; // Optional additional information or notes

    this.validate(); // Ensure required fields are provided
  }

  /**
   * Converts the MedicationBase object to a JSON-compatible format.
   * @returns {Object} The medication object in JSON format.
   */
  toJSON() {
    return {
      id: this.id, // Automatically included from BaseModel
      name: this.name,
      dose: this.dose,
      schedule: this.schedule,
      sideEffects: this.sideEffects,
      activeIngredients: this.activeIngredients,
      notes: this.notes // Include notes in the JSON output
    };
  }

  /**
   * Validates that the essential properties for the medication are provided.
   * @throws {Error} Throws an error if the name, dose, or schedule is missing.
   */
  validate() {
    if (!this.name || !this.dose || !this.schedule) {
      throw new Error('Medication must have a name, dose, and schedule.');
    }
  }
}

export { MedicationBase };
