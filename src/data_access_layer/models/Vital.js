/**
 * #file: Vitals.js
 * Represents a single vitals record.
 *
 * @typedef {Object} VitalsData
 * @property {string} [id] - unique ID. Auto-generated.
 * @property {string|Date} date - ISO 8601 date string or Date object.
 * @property {number} systolic - Systolic pressure (upper number).
 * @property {number} diastolic - Diastolic pressure (lower number).
 * @property {number} heartRate - Heart rate in beats per minute.
 *
 * @example
 * const vitals = new Vitals({
 *   systolic: 133,
 *   diastolic: 87,
 *   heartRate: 80,
 * });
 */
import { BaseModel } from './BaseModel.js';

class Vitals extends BaseModel {
  constructor({ systolic, diastolic, heartRate }) {
    super(); // Call the BaseModel constructor to automatically generate the id

    this.date = new Date(Date.now()); // Store the current timestamp (Unix time in milliseconds)
    this.systolic = parseInt(systolic, 10);
    this.diastolic = parseInt(diastolic, 10);
    this.heartRate = parseInt(heartRate, 10);

    this.validate(); // Validate the data
  }

  // Override the toJSON method to convert the object into a JSON format
  toJSON() {
    return {
      id: this.id, // Automatically included from BaseModel
      date: this.date.toISOString(), // Convert date to ISO 8601 string
      systolic: this.systolic,
      diastolic: this.diastolic,
      heartRate: this.heartRate
    };
  }

  // Override the validate method to enforce specific validation logic
  validate() {
    if (isNaN(this.systolic) || isNaN(this.diastolic) || isNaN(this.heartRate)) {
      throw new Error('Vitals must contain valid numeric values for systolic, diastolic, and heart rate.');
    }
    if (isNaN(this.date.getTime())) {
      throw new Error('Date must be a valid timestamp.');
    }

    return true; // Return true if valid
  }
}

export {Vitals};
