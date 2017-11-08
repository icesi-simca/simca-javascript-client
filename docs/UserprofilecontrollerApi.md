# ApiSimca.UserprofilecontrollerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editUserProfileUsingPUT**](UserprofilecontrollerApi.md#editUserProfileUsingPUT) | **PUT** /api/userprofile/v1/profile | Edit a user profile
[**getUserProfileUsingGET**](UserprofilecontrollerApi.md#getUserProfileUsingGET) | **GET** /api/userprofile/v1/profile/{id} | Get user profile


<a name="editUserProfileUsingPUT"></a>
# **editUserProfileUsingPUT**
> editUserProfileUsingPUT(userProfileDTO)

Edit a user profile

Edit a user profile by a given user id

### Example
```javascript
var ApiSimca = require('api_simca');
var defaultClient = ApiSimca.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiSimca.UserprofilecontrollerApi();

var userProfileDTO = new ApiSimca.UserProfileDTO(); // UserProfileDTO | userProfileDTO


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.editUserProfileUsingPUT(userProfileDTO, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userProfileDTO** | [**UserProfileDTO**](UserProfileDTO.md)| userProfileDTO | 

### Return type

null (empty response body)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUserProfileUsingGET"></a>
# **getUserProfileUsingGET**
> UserProfileDTO getUserProfileUsingGET(id)

Get user profile

Get a user profile by a given user id

### Example
```javascript
var ApiSimca = require('api_simca');
var defaultClient = ApiSimca.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiSimca.UserprofilecontrollerApi();

var id = "id_example"; // String | User id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserProfileUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User id | 

### Return type

[**UserProfileDTO**](UserProfileDTO.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

