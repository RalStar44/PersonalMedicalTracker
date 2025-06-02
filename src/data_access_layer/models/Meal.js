// #file: Meal.js
// #purpose: Represents a meal containing multiple food items, calculating total nutritional data.


/**
 * @class Meal
 * @extends BaseModel
 * @example {
 *   name: "Chicken Salad",
 *   mealType: "Lunch",
 *   foodItems: [
 *     { name: "Chicken Breast", servingSize: "100g", sodiumMg: 120, tags: ["high-protein"] },
 *     { name: "Lettuce", servingSize: "50g", sodiumMg: 5, tags: ["low-sodium"] }
 *   ],
 *   tags: ["low-sodium", "high-protein"]
 * }
 */

import { BaseModel } from "./BaseModel";
import { FoodItem } from "./FoodItem";

class Meal extends BaseModel {
  /**
   * Creates an instance of the Meal model.
   * @param {Object} params - The meal properties.
   * @param {string} params.name - The name of the meal (e.g., "Chicken Salad").
   * @param {string} params.mealType - The type of meal (e.g., "Lunch").
   * @param {Array<FoodItem>} [params.foodItems= Array<FoodItem> ] - A list of food items included in the meal.
   * @param {Array<string>} [params.dietaryLabels= Array<DietaryLabels>] - Labels that apply to the meal (e.g., ["low-sodium"]).
   */
  constructor({ name, mealType, foodItems = [], dietaryLabels = [] }) {
    super();
    this.name = name;
    this.mealType = mealType;
  
    // Ensure all foodItems are instances of FoodItem
    this.foodItems = foodItems.map(item => 
      item instanceof FoodItem ? item : new FoodItem(item)
    );
  
    // Only allow known dietary labels from DietaryLabels
    const knownLabels = Object.values(DietaryLabels);
    this.dietaryLabels = dietaryLabels.filter(label => knownLabels.includes(label));
  
    this.validate();
  }
  

  /**
   * Calculates the total sodium content of the meal.
   * @returns {number} The total sodium in mg for the meal.
   */
  getTotalSodium() {
    return this.foodItems.reduce((total, item) => total + item.sodiumMg, 0);
  }

  /**
   * Converts the Meal object to a JSON-compatible format.
   * @returns {Object} The meal object in JSON format.
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      mealType: this.mealType,
      foodItems: this.foodItems.map(item => item.toJSON()), // Convert each FoodItem to JSON
      dietaryLabels: this.dietaryLabels,
      totalSodium: this.getTotalSodium(), // Include total sodium
    };
  }

  /**
   * Validates that the required properties for the meal are provided.
   * @throws {Error} Throws an error if the name, mealType, or foodItems are missing.
   */
  validate() {
    if (!this.name || !this.mealType || !Array.isArray(this.foodItems) || this.foodItems.length === 0) {
      throw new Error("Meal must have a name, mealType, and at least one food item.");
    }
  }
}

export { Meal };
