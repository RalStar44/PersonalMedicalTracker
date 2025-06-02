// generic_model.js
import GenericModelCreate from "./createGenericModel";
import GenericModelRead from "./readGenericModel";
import GenericModelUpdate from "./updateGenericModel";
import GenericModelDelete from "./deleteGenericModel";

/**
 * Interface pattern for Models. Derive your models from this object.
 * @typedef {Object} GenericModel
 * @property {Function} create - Function to create a new item.
 * @property {Function} read - Function to read an item.
 * @property {Function} update - Function to update an item.
 * @property {Function} delete - Function to delete an item.
 */

/**
 * The GenericModel object encapsulates CRUD operations for a generic item.
 * @type {GenericModel}
 */
const GenericModel = {
    /**
     * Function to create a new item.
     * @function create
     * @memberof GenericModel
     * @returns {Promise} A promise that resolves to the created item.
     */
    create: GenericModelCreate,

    /**
     * Function to read an item.
     * @function read
     * @memberof GenericModel
     * @returns {Promise} A promise that resolves to the retrieved item.
     */
    read: GenericModelRead,

    /**
     * Function to update an item.
     * @function update
     * @memberof GenericModel
     * @returns {Promise} A promise that resolves to the updated item.
     */
    update: GenericModelUpdate,

    /**
     * Function to delete an item.
     * @function delete
     * @memberof GenericModel
     * @returns {Promise} A promise that resolves to a confirmation message.
     */
    delete: GenericModelDelete,
};

export default GenericModel;
