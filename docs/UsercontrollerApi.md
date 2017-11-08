# ApiSimca.UsercontrollerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserUsingPOST**](UsercontrollerApi.md#addUserUsingPOST) | **POST** /api/user/v1/user | Create a user
[**checkEmailConfirmationStatusUsingGET**](UsercontrollerApi.md#checkEmailConfirmationStatusUsingGET) | **GET** /api/user/v1/confirm-email | Check an email confirmation status
[**checkPasswordResetRequestStatusUsingGET**](UsercontrollerApi.md#checkPasswordResetRequestStatusUsingGET) | **GET** /api/user/v1/password-reset | Check password reset request status
[**confirmEmailUsingPUT**](UsercontrollerApi.md#confirmEmailUsingPUT) | **PUT** /api/user/v1/confirm-email | Confirm email account
[**deleteUserUsingDELETE**](UsercontrollerApi.md#deleteUserUsingDELETE) | **DELETE** /api/user/v1/user | Delete a user
[**getUserByUsernameUsingGET**](UsercontrollerApi.md#getUserByUsernameUsingGET) | **GET** /api/user/v1/user/by-username/{userName} | Get user by username
[**getUserUsingGET**](UsercontrollerApi.md#getUserUsingGET) | **GET** /api/user/v1/user/{id} | Get user by id
[**getUsersUsingGET**](UsercontrollerApi.md#getUsersUsingGET) | **GET** /api/user/v1/users | Get all users
[**requestPasswordResetUsingPOST**](UsercontrollerApi.md#requestPasswordResetUsingPOST) | **POST** /api/user/v1/password-reset | Request a password reset
[**resetPasswordUsingPUT**](UsercontrollerApi.md#resetPasswordUsingPUT) | **PUT** /api/user/v1/password-reset | Reset user password


<a name="addUserUsingPOST"></a>
# **addUserUsingPOST**
> addUserUsingPOST(addUserDTO)

Create a user

Create a user. Username and email must be unique. Password must contain at least an uppercase letter, a number and between 8-20 characters

### Example
```javascript
var ApiSimca = require('api_simca');

var apiInstance = new ApiSimca.UsercontrollerApi();

var addUserDTO = new ApiSimca.AddUserDTO(); // AddUserDTO | addUserDTO


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addUserUsingPOST(addUserDTO, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addUserDTO** | [**AddUserDTO**](AddUserDTO.md)| addUserDTO | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="checkEmailConfirmationStatusUsingGET"></a>
# **checkEmailConfirmationStatusUsingGET**
> StateDTO checkEmailConfirmationStatusUsingGET(opts)

Check an email confirmation status

Check the currnet state of an email confirmation request

### Example
```javascript
var ApiSimca = require('api_simca');

var apiInstance = new ApiSimca.UsercontrollerApi();

var opts = { 
  'token': "token_example" // String | Email confirmation request token
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkEmailConfirmationStatusUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Email confirmation request token | [optional] 

### Return type

[**StateDTO**](StateDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="checkPasswordResetRequestStatusUsingGET"></a>
# **checkPasswordResetRequestStatusUsingGET**
> StateDTO checkPasswordResetRequestStatusUsingGET(opts)

Check password reset request status

Check the current state of a password reset request

### Example
```javascript
var ApiSimca = require('api_simca');

var apiInstance = new ApiSimca.UsercontrollerApi();

var opts = { 
  'token': "token_example" // String | Password reset request token
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkPasswordResetRequestStatusUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Password reset request token | [optional] 

### Return type

[**StateDTO**](StateDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="confirmEmailUsingPUT"></a>
# **confirmEmailUsingPUT**
> confirmEmailUsingPUT(opts)

Confirm email account

Confirm an email account with a currently active email confirmation request

### Example
```javascript
var ApiSimca = require('api_simca');

var apiInstance = new ApiSimca.UsercontrollerApi();

var opts = { 
  'token': "token_example" // String | Email confirmation request token
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.confirmEmailUsingPUT(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Email confirmation request token | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteUserUsingDELETE"></a>
# **deleteUserUsingDELETE**
> deleteUserUsingDELETE(opts)

Delete a user

Delete a user by a given user id

### Example
```javascript
var ApiSimca = require('api_simca');
var defaultClient = ApiSimca.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiSimca.UsercontrollerApi();

var opts = { 
  'id': "id_example" // String | Registered user id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUserUsingDELETE(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Registered user id | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUserByUsernameUsingGET"></a>
# **getUserByUsernameUsingGET**
> UserDTO getUserByUsernameUsingGET(userName)

Get user by username

Fetch a user by a given username

### Example
```javascript
var ApiSimca = require('api_simca');
var defaultClient = ApiSimca.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiSimca.UsercontrollerApi();

var userName = "userName_example"; // String | Registered user username


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserByUsernameUsingGET(userName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userName** | **String**| Registered user username | 

### Return type

[**UserDTO**](UserDTO.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUserUsingGET"></a>
# **getUserUsingGET**
> UserDTO getUserUsingGET(id)

Get user by id

Fetch a user by a given user id

### Example
```javascript
var ApiSimca = require('api_simca');
var defaultClient = ApiSimca.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiSimca.UsercontrollerApi();

var id = "id_example"; // String | Registered user id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Registered user id | 

### Return type

[**UserDTO**](UserDTO.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUsersUsingGET"></a>
# **getUsersUsingGET**
> UsersDTO getUsersUsingGET()

Get all users

Fetch a list of all registered users

### Example
```javascript
var ApiSimca = require('api_simca');
var defaultClient = ApiSimca.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiSimca.UsercontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsersUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UsersDTO**](UsersDTO.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="requestPasswordResetUsingPOST"></a>
# **requestPasswordResetUsingPOST**
> requestPasswordResetUsingPOST(requestPasswordResetDTO)

Request a password reset

Request a password reset for a user with specified email. The email must be confirmed

### Example
```javascript
var ApiSimca = require('api_simca');

var apiInstance = new ApiSimca.UsercontrollerApi();

var requestPasswordResetDTO = new ApiSimca.RequestPasswordResetDTO(); // RequestPasswordResetDTO | requestPasswordResetDTO


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.requestPasswordResetUsingPOST(requestPasswordResetDTO, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestPasswordResetDTO** | [**RequestPasswordResetDTO**](RequestPasswordResetDTO.md)| requestPasswordResetDTO | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="resetPasswordUsingPUT"></a>
# **resetPasswordUsingPUT**
> resetPasswordUsingPUT(resetPasswordDTO)

Reset user password

Reset a user password with a currently active password reset request

### Example
```javascript
var ApiSimca = require('api_simca');

var apiInstance = new ApiSimca.UsercontrollerApi();

var resetPasswordDTO = new ApiSimca.ResetPasswordDTO(); // ResetPasswordDTO | resetPasswordDTO


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.resetPasswordUsingPUT(resetPasswordDTO, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetPasswordDTO** | [**ResetPasswordDTO**](ResetPasswordDTO.md)| resetPasswordDTO | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

