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
    define(['../ApiClient', '../model/PlaceDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PlaceDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiSimca) {
      root.ApiSimca = {};
    }
    root.ApiSimca.PlacesDTO = factory(root.ApiSimca.ApiClient, root.ApiSimca.PlaceDTO);
  }
}(this, function(ApiClient, PlaceDTO) {
  'use strict';




  /**
   * The PlacesDTO model module.
   * @module model/PlacesDTO
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PlacesDTO</code>.
   * @alias module:model/PlacesDTO
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PlacesDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlacesDTO} obj Optional instance to populate.
   * @return {module:model/PlacesDTO} The populated <code>PlacesDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('places')) {
        obj['places'] = ApiClient.convertToType(data['places'], [PlaceDTO]);
      }
    }
    return obj;
  }

  /**
   * List of places
   * @member {Array.<module:model/PlaceDTO>} places
   */
  exports.prototype['places'] = undefined;



  return exports;
}));

