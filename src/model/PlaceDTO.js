/**
 * API SIMCA
 * SIMCA API Client
 *
 * OpenAPI spec version: 1.0.0
 * Contact: pdgsimca@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiSimca) {
      root.ApiSimca = {};
    }
    root.ApiSimca.PlaceDTO = factory(root.ApiSimca.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PlaceDTO model module.
   * @module model/PlaceDTO
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PlaceDTO</code>.
   * @alias module:model/PlaceDTO
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>PlaceDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlaceDTO} obj Optional instance to populate.
   * @return {module:model/PlaceDTO} The populated <code>PlaceDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
      }
      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * Full address and city name of the place
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * Autogenerated place id
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Place's geographic coordinate
   * @member {Number} latitude
   */
  exports.prototype['latitude'] = undefined;
  /**
   * Place's geographic coordinate
   * @member {Number} longitude
   */
  exports.prototype['longitude'] = undefined;
  /**
   * Name of the place
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


