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
    instance = new ApiSimca.ResetPasswordDTO();
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

  describe('ResetPasswordDTO', function() {
    it('should create an instance of ResetPasswordDTO', function() {
      // uncomment below and update the code to test ResetPasswordDTO
      //var instane = new ApiSimca.ResetPasswordDTO();
      //expect(instance).to.be.a(ApiSimca.ResetPasswordDTO);
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new ApiSimca.ResetPasswordDTO();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new ApiSimca.ResetPasswordDTO();
      //expect(instance).to.be();
    });

  });

}));
