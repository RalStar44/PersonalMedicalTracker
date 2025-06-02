// #file: OverTheCounter.js
// #purpose: Represents an over-the-counter medication extending MedicationBase.

/**
 * @class OverTheCounter
 * @extends MedicationBase
 * @example {
 *   name: "Ibuprofen",
 *   dose: "200mg",
 *   schedule: "Every 4-6 hours as needed",
 *   usageLabels: [UsageLabels.PAIN_RELIEF, UsageLabels.ANTI_INFLAMMATORY],
 *   recommendedFor: ["headache", "muscle pain"]
 * }
 */

import { MedicationBase } from "./MedicationBase";
import { UsageLabels } from "./constants/usageLabels";

class OverTheCounter extends MedicationBase {
  /**
   * Creates an instance of the OverTheCounter medication model.
   * @param {Object} params - The medication properties.
   * @param {string} params.name - The name of the medication (e.g., "Ibuprofen").
   * @param {string} params.dose - The recommended dosage (e.g., "200mg").
   * @param {string} params.schedule - How often the medication should be taken (e.g., "Every 4-6 hours as needed").
   * @param {Array<string>} [params.sideEffects=[]] - A list of potential side effects (e.g., ["Nausea"]).
   * @param {Array<string>} [params.activeIngredients=[]] - A list of active ingredients (e.g., ["Ibuprofen"]).
   * @param {Array<string>} [params.usageLabels=[]] - Labels relevant to the medication (e.g., ["pain-relief"]).
   * @param {Array<string>} [params.recommendedFor=[]] - Conditions for which the medication is recommended (e.g., ["headache"]).
   * @param {string} [params.notes] - Any additional information or instructions regarding the medication (optional).
   */
  constructor({
    name,
    dose,
    schedule,
    sideEffects = [],
    activeIngredients = [],
    usageLabels = [], // Changed to plural to match the property and consistency
    recommendedFor = [],
    notes
  }) {
    super({ name, dose, schedule, sideEffects, activeIngredients, notes });
    this.usageLabels = usageLabels; // Consistent with plural naming
    this.recommendedFor = recommendedFor;
  }

  /**
   * Converts the OverTheCounter medication object to a JSON-compatible format.
   * @returns {Object} The medication object in JSON format.
   */
  toJSON() {
    return {
      ...super.toJSON(),
      usageLabels: this.usageLabels, // Consistent with property name
      recommendedFor: this.recommendedFor,
    };
  }
}

export { OverTheCounter };
