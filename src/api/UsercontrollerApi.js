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
    define(['../ApiClient', '../model/AddUserDTO', '../model/RequestPasswordResetDTO', '../model/ResetPasswordDTO', '../model/StateDTO', '../model/UserDTO', '../model/UsersDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddUserDTO'), require('../model/RequestPasswordResetDTO'), require('../model/ResetPasswordDTO'), require('../model/StateDTO'), require('../model/UserDTO'), require('../model/UsersDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiSimca) {
      root.ApiSimca = {};
    }
    root.ApiSimca.UsercontrollerApi = factory(root.ApiSimca.ApiClient, root.ApiSimca.AddUserDTO, root.ApiSimca.RequestPasswordResetDTO, root.ApiSimca.ResetPasswordDTO, root.ApiSimca.StateDTO, root.ApiSimca.UserDTO, root.ApiSimca.UsersDTO);
  }
}(this, function(ApiClient, AddUserDTO, RequestPasswordResetDTO, ResetPasswordDTO, StateDTO, UserDTO, UsersDTO) {
  'use strict';

  /**
   * Usercontroller service.
   * @module api/UsercontrollerApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UsercontrollerApi. 
   * @alias module:api/UsercontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addUserUsingPOST operation.
     * @callback module:api/UsercontrollerApi~addUserUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a user
     * Create a user. Username and email must be unique. Password must contain at least an uppercase letter, a number and between 8-20 characters
     * @param {module:model/AddUserDTO} addUserDTO addUserDTO
     * @param {module:api/UsercontrollerApi~addUserUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addUserUsingPOST = function(addUserDTO, callback) {
      var postBody = addUserDTO;

      // verify the required parameter 'addUserDTO' is set
      if (addUserDTO === undefined || addUserDTO === null) {
        throw new Error("Missing the required parameter 'addUserDTO' when calling addUserUsingPOST");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/user/v1/user', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the checkEmailConfirmationStatusUsingGET operation.
     * @callback module:api/UsercontrollerApi~checkEmailConfirmationStatusUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StateDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check an email confirmation status
     * Check the currnet state of an email confirmation request
     * @param {Object} opts Optional parameters
     * @param {String} opts.token Email confirmation request token
     * @param {module:api/UsercontrollerApi~checkEmailConfirmationStatusUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StateDTO}
     */
    this.checkEmailConfirmationStatusUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'token': opts['token']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = StateDTO;

      return this.apiClient.callApi(
        '/api/user/v1/confirm-email', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the checkPasswordResetRequestStatusUsingGET operation.
     * @callback module:api/UsercontrollerApi~checkPasswordResetRequestStatusUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StateDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check password reset request status
     * Check the current state of a password reset request
     * @param {Object} opts Optional parameters
     * @param {String} opts.token Password reset request token
     * @param {module:api/UsercontrollerApi~checkPasswordResetRequestStatusUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StateDTO}
     */
    this.checkPasswordResetRequestStatusUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'token': opts['token']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = StateDTO;

      return this.apiClient.callApi(
        '/api/user/v1/password-reset', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the confirmEmailUsingPUT operation.
     * @callback module:api/UsercontrollerApi~confirmEmailUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Confirm email account
     * Confirm an email account with a currently active email confirmation request
     * @param {Object} opts Optional parameters
     * @param {String} opts.token Email confirmation request token
     * @param {module:api/UsercontrollerApi~confirmEmailUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.confirmEmailUsingPUT = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'token': opts['token']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/user/v1/confirm-email', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserUsingDELETE operation.
     * @callback module:api/UsercontrollerApi~deleteUserUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user
     * Delete a user by a given user id
     * @param {Object} opts Optional parameters
     * @param {String} opts.id Registered user id
     * @param {module:api/UsercontrollerApi~deleteUserUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUserUsingDELETE = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id': opts['id']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2schema'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/user/v1/user', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserByUsernameUsingGET operation.
     * @callback module:api/UsercontrollerApi~getUserByUsernameUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user by username
     * Fetch a user by a given username
     * @param {String} userName Registered user username
     * @param {module:api/UsercontrollerApi~getUserByUsernameUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserDTO}
     */
    this.getUserByUsernameUsingGET = function(userName, callback) {
      var postBody = null;

      // verify the required parameter 'userName' is set
      if (userName === undefined || userName === null) {
        throw new Error("Missing the required parameter 'userName' when calling getUserByUsernameUsingGET");
      }


      var pathParams = {
        'userName': userName
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2schema'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = UserDTO;

      return this.apiClient.callApi(
        '/api/user/v1/user/by-username/{userName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserUsingGET operation.
     * @callback module:api/UsercontrollerApi~getUserUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user by id
     * Fetch a user by a given user id
     * @param {String} id Registered user id
     * @param {module:api/UsercontrollerApi~getUserUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserDTO}
     */
    this.getUserUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUserUsingGET");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2schema'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = UserDTO;

      return this.apiClient.callApi(
        '/api/user/v1/user/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsersUsingGET operation.
     * @callback module:api/UsercontrollerApi~getUsersUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UsersDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all users
     * Fetch a list of all registered users
     * @param {module:api/UsercontrollerApi~getUsersUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UsersDTO}
     */
    this.getUsersUsingGET = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2schema'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = UsersDTO;

      return this.apiClient.callApi(
        '/api/user/v1/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the requestPasswordResetUsingPOST operation.
     * @callback module:api/UsercontrollerApi~requestPasswordResetUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request a password reset
     * Request a password reset for a user with specified email. The email must be confirmed
     * @param {module:model/RequestPasswordResetDTO} requestPasswordResetDTO requestPasswordResetDTO
     * @param {module:api/UsercontrollerApi~requestPasswordResetUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.requestPasswordResetUsingPOST = function(requestPasswordResetDTO, callback) {
      var postBody = requestPasswordResetDTO;

      // verify the required parameter 'requestPasswordResetDTO' is set
      if (requestPasswordResetDTO === undefined || requestPasswordResetDTO === null) {
        throw new Error("Missing the required parameter 'requestPasswordResetDTO' when calling requestPasswordResetUsingPOST");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/user/v1/password-reset', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the resetPasswordUsingPUT operation.
     * @callback module:api/UsercontrollerApi~resetPasswordUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset user password
     * Reset a user password with a currently active password reset request
     * @param {module:model/ResetPasswordDTO} resetPasswordDTO resetPasswordDTO
     * @param {module:api/UsercontrollerApi~resetPasswordUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.resetPasswordUsingPUT = function(resetPasswordDTO, callback) {
      var postBody = resetPasswordDTO;

      // verify the required parameter 'resetPasswordDTO' is set
      if (resetPasswordDTO === undefined || resetPasswordDTO === null) {
        throw new Error("Missing the required parameter 'resetPasswordDTO' when calling resetPasswordUsingPUT");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/user/v1/password-reset', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
