// #file: FoodItem.js
// #purpose: Represents a single food item with nutritional data.

/**
 * @class FoodItem
 * @extends BaseModel
 * @example:
 * {
 *   name: "Chicken Breast",
 *   servingSize: "100g",       // e.g. "100g"
 *   sodiumMg: 120,             // sodium in mg per serving
 *   tags: ["low-sodium", "high-protein"]
 * }
 */

import { BaseModel } from "./BaseModel";

class FoodItem extends BaseModel {
  constructor({ name, servingSize, sodiumMg, tags = [] }) {
    super();
    this.name = name;
    this.servingSize = servingSize; // e.g. "100g"
    this.sodiumMg = sodiumMg;       // sodium in mg per serving
    this.tags = tags;               // e.g., ["low-sodium", "high-protein"]

    this.validate();
  }

  validate() {
    if (!this.name || !this.servingSize || typeof this.sodiumMg !== "number") {
      throw new Error("FoodItem must have name, servingSize, and sodiumMg.");
    }
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      servingSize: this.servingSize,
      sodiumMg: this.sodiumMg,
      tags: this.tags,
    };
  }
}

export { FoodItem };
