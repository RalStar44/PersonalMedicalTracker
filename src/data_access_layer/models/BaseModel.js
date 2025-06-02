// #file: BaseModel.js
// #purpose:  Used to create a unified object model (UOM)

import crypto from 'crypto';

/**
 * @class BaseModel
 * @description A base model for creating objects with a unique identifier (UUID).
 */
class BaseModel {
  /**
   * Creates an instance of BaseModel with a unique UUID.
   * @constructor
   * @returns {BaseModel} A new instance of the BaseModel.
   */
  constructor() {
    this.id = crypto.randomUUID(); // Automatically generates a UUID for each instance
  }

  /**
   * Converts the model instance to a plain object with the `id` included.
   * @returns {Object} A plain object representation of the model instance.
   * @throws {Error} Throws error to enforce overriding in subclasses.
   */
  toJSON() {
    throw new Error('toJSON() method must be implemented in subclass');
  }

  /**
   * Placeholder validation function that can be overridden by subclasses.
   * @returns {boolean} Always returns true, but can be extended for validation logic.
   * @throws {Error} Throws error to enforce overriding in subclasses.
   */
  validate() {
    throw new Error('validate() method must be implemented in subclass');
  }
}

export {BaseModel};