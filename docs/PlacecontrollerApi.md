# ApiSimca.PlacecontrollerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPlaceUsingPOST**](PlacecontrollerApi.md#createPlaceUsingPOST) | **POST** /api/place/v1/place | Create a place
[**deleteLugarUsingDELETE**](PlacecontrollerApi.md#deleteLugarUsingDELETE) | **DELETE** /api/place/v1/place/{idPlace} | Delete a place
[**editPlaceUsingPUT**](PlacecontrollerApi.md#editPlaceUsingPUT) | **PUT** /api/place/v1/place | Edit a place
[**getPlaceUsingGET**](PlacecontrollerApi.md#getPlaceUsingGET) | **GET** /api/place/v1/place/{idPlace} | Get a place
[**getPlacesUsingGET**](PlacecontrollerApi.md#getPlacesUsingGET) | **GET** /api/place/v1/places | Get all places


<a name="createPlaceUsingPOST"></a>
# **createPlaceUsingPOST**
> createPlaceUsingPOST(addPlaceDTO)

Create a place

Create a place. Latitude and longitude will be shown in a map, make sure they match with the given address

### Example
```javascript
var ApiSimca = require('api_simca');
var defaultClient = ApiSimca.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiSimca.PlacecontrollerApi();

var addPlaceDTO = new ApiSimca.AddPlaceDTO(); // AddPlaceDTO | addPlaceDTO


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createPlaceUsingPOST(addPlaceDTO, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addPlaceDTO** | [**AddPlaceDTO**](AddPlaceDTO.md)| addPlaceDTO | 

### Return type

null (empty response body)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteLugarUsingDELETE"></a>
# **deleteLugarUsingDELETE**
> deleteLugarUsingDELETE(idPlace)

Delete a place

Delete a place by a given id

### Example
```javascript
var ApiSimca = require('api_simca');
var defaultClient = ApiSimca.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiSimca.PlacecontrollerApi();

var idPlace = 56; // Number | Place id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteLugarUsingDELETE(idPlace, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idPlace** | **Number**| Place id | 

### Return type

null (empty response body)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="editPlaceUsingPUT"></a>
# **editPlaceUsingPUT**
> editPlaceUsingPUT(placeDTO)

Edit a place

Edit a place with a given id. All values must be valid

### Example
```javascript
var ApiSimca = require('api_simca');
var defaultClient = ApiSimca.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiSimca.PlacecontrollerApi();

var placeDTO = new ApiSimca.PlaceDTO(); // PlaceDTO | placeDTO


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.editPlaceUsingPUT(placeDTO, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **placeDTO** | [**PlaceDTO**](PlaceDTO.md)| placeDTO | 

### Return type

null (empty response body)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getPlaceUsingGET"></a>
# **getPlaceUsingGET**
> PlaceDTO getPlaceUsingGET(idPlace)

Get a place

Fetch a place by a given place id

### Example
```javascript
var ApiSimca = require('api_simca');

var apiInstance = new ApiSimca.PlacecontrollerApi();

var idPlace = 56; // Number | Place id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPlaceUsingGET(idPlace, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idPlace** | **Number**| Place id | 

### Return type

[**PlaceDTO**](PlaceDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getPlacesUsingGET"></a>
# **getPlacesUsingGET**
> PlacesDTO getPlacesUsingGET()

Get all places

Fetch all registered places

### Example
```javascript
var ApiSimca = require('api_simca');

var apiInstance = new ApiSimca.PlacecontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPlacesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PlacesDTO**](PlacesDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

