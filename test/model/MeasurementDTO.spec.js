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
    instance = new ApiSimca.MeasurementDTO();
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

  describe('MeasurementDTO', function() {
    it('should create an instance of MeasurementDTO', function() {
      // uncomment below and update the code to test MeasurementDTO
      //var instane = new ApiSimca.MeasurementDTO();
      //expect(instance).to.be.a(ApiSimca.MeasurementDTO);
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new ApiSimca.MeasurementDTO();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApiSimca.MeasurementDTO();
      //expect(instance).to.be();
    });

    it('should have the property place (base name: "place")', function() {
      // uncomment below and update the code to test the property place
      //var instane = new ApiSimca.MeasurementDTO();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instane = new ApiSimca.MeasurementDTO();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new ApiSimca.MeasurementDTO();
      //expect(instance).to.be();
    });

  });

}));