// file: generic.js
// purpose: First generic derived model for use in examples and structure of a model

import { BaseModel } from "./BaseModel";

class Generic extends BaseModel {
  constructor(name = "") {
    super(); // Calls the BaseModel constructor to set the `id`
    this.name = name; // Add specific properties (like 'name') for this model
  }

  // Override toJSON to represent the object as a plain object
  toJSON() {
    return { id: this.id, name: this.name };
  }

  // Basic validation example, ensure `name` is provided
  validate() {
    if (!this.name) {
      throw new Error('Name is required');
    }
  }
}

export default Generic;
