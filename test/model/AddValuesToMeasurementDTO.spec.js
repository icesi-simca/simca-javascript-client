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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiSimca);
  }
}(this, function(expect, ApiSimca) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApiSimca.AddValuesToMeasurementDTO();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AddValuesToMeasurementDTO', function() {
    it('should create an instance of AddValuesToMeasurementDTO', function() {
      // uncomment below and update the code to test AddValuesToMeasurementDTO
      //var instane = new ApiSimca.AddValuesToMeasurementDTO();
      //expect(instance).to.be.a(ApiSimca.AddValuesToMeasurementDTO);
    });

    it('should have the property average (base name: "average")', function() {
      // uncomment below and update the code to test the property average
      //var instane = new ApiSimca.AddValuesToMeasurementDTO();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instane = new ApiSimca.AddValuesToMeasurementDTO();
      //expect(instance).to.be();
    });

    it('should have the property pollutantId (base name: "pollutantId")', function() {
      // uncomment below and update the code to test the property pollutantId
      //var instane = new ApiSimca.AddValuesToMeasurementDTO();
      //expect(instance).to.be();
    });

  });

}));
