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
    instance = new ApiSimca.PlacecontrollerApi();
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

  describe('PlacecontrollerApi', function() {
    describe('createPlaceUsingPOST', function() {
      it('should call createPlaceUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createPlaceUsingPOST
        //instance.createPlaceUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteLugarUsingDELETE', function() {
      it('should call deleteLugarUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteLugarUsingDELETE
        //instance.deleteLugarUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editPlaceUsingPUT', function() {
      it('should call editPlaceUsingPUT successfully', function(done) {
        //uncomment below and update the code to test editPlaceUsingPUT
        //instance.editPlaceUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPlaceUsingGET', function() {
      it('should call getPlaceUsingGET successfully', function(done) {
        //uncomment below and update the code to test getPlaceUsingGET
        //instance.getPlaceUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPlacesUsingGET', function() {
      it('should call getPlacesUsingGET successfully', function(done) {
        //uncomment below and update the code to test getPlacesUsingGET
        //instance.getPlacesUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));