# ApiSimca.MeasurementcontrollerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addValuesToMeasurementUsingPOST**](MeasurementcontrollerApi.md#addValuesToMeasurementUsingPOST) | **POST** /api/measurement/v1/measurement/{measurementId}/add-values | Add values to a measurement
[**createMeasurementUsingPOST**](MeasurementcontrollerApi.md#createMeasurementUsingPOST) | **POST** /api/measurement/v1/measurement | Create a measurement
[**deleteMeasurementUsingDELETE**](MeasurementcontrollerApi.md#deleteMeasurementUsingDELETE) | **DELETE** /api/measurement/v1/measurement/{measurementId} | Delete a measurement
[**editMeasurementUsingPUT**](MeasurementcontrollerApi.md#editMeasurementUsingPUT) | **PUT** /api/measurement/v1/measurement | Edit a measurement
[**getMeasurementByIdUsingGET**](MeasurementcontrollerApi.md#getMeasurementByIdUsingGET) | **GET** /api/measurement/v1/measurement/{measurementId} | Get measurement by id
[**getMeasurementUsingGET**](MeasurementcontrollerApi.md#getMeasurementUsingGET) | **GET** /api/measurement/v1/measurements | Get measurements (optional filters)


<a name="addValuesToMeasurementUsingPOST"></a>
# **addValuesToMeasurementUsingPOST**
> addValuesToMeasurementUsingPOST(measurementId, addValuesToMeasurementDTO)

Add values to a measurement

Add measured values of a given pollutant to a specified measurement.

### Example
```javascript
var ApiSimca = require('api_simca');
var defaultClient = ApiSimca.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiSimca.MeasurementcontrollerApi();

var measurementId = 56; // Number | Id of the measuremet to add values to

var addValuesToMeasurementDTO = new ApiSimca.AddValuesToMeasurementDTO(); // AddValuesToMeasurementDTO | addValuesToMeasurementDTO


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addValuesToMeasurementUsingPOST(measurementId, addValuesToMeasurementDTO, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **measurementId** | **Number**| Id of the measuremet to add values to | 
 **addValuesToMeasurementDTO** | [**AddValuesToMeasurementDTO**](AddValuesToMeasurementDTO.md)| addValuesToMeasurementDTO | 

### Return type

null (empty response body)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="createMeasurementUsingPOST"></a>
# **createMeasurementUsingPOST**
> createMeasurementUsingPOST(addMeasurementDTO, opts)

Create a measurement

Create a measurement. Place and pollutants ids must already exist.

### Example
```javascript
var ApiSimca = require('api_simca');
var defaultClient = ApiSimca.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiSimca.MeasurementcontrollerApi();

var addMeasurementDTO = new ApiSimca.AddMeasurementDTO(); // AddMeasurementDTO | addMeasurementDTO

var opts = { 
  'details': {key: "details_example"}, // {String: String} | 
  'authenticated': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createMeasurementUsingPOST(addMeasurementDTO, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addMeasurementDTO** | [**AddMeasurementDTO**](AddMeasurementDTO.md)| addMeasurementDTO | 
 **details** | [**{String: String}**](String.md)|  | [optional] 
 **authenticated** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteMeasurementUsingDELETE"></a>
# **deleteMeasurementUsingDELETE**
> deleteMeasurementUsingDELETE(measurementId)

Delete a measurement

Delete a specified measurement.

### Example
```javascript
var ApiSimca = require('api_simca');
var defaultClient = ApiSimca.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiSimca.MeasurementcontrollerApi();

var measurementId = 56; // Number | Id of the measurement to be deleted


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteMeasurementUsingDELETE(measurementId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **measurementId** | **Number**| Id of the measurement to be deleted | 

### Return type

null (empty response body)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="editMeasurementUsingPUT"></a>
# **editMeasurementUsingPUT**
> editMeasurementUsingPUT(measurementDTO)

Edit a measurement

Edit a specified measurement. All values must be valid.

### Example
```javascript
var ApiSimca = require('api_simca');
var defaultClient = ApiSimca.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiSimca.MeasurementcontrollerApi();

var measurementDTO = new ApiSimca.MeasurementDTO(); // MeasurementDTO | measurementDTO


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.editMeasurementUsingPUT(measurementDTO, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **measurementDTO** | [**MeasurementDTO**](MeasurementDTO.md)| measurementDTO | 

### Return type

null (empty response body)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getMeasurementByIdUsingGET"></a>
# **getMeasurementByIdUsingGET**
> MeasurementDTO getMeasurementByIdUsingGET(measurementId)

Get measurement by id

Fetch a single measurement by a given id.

### Example
```javascript
var ApiSimca = require('api_simca');

var apiInstance = new ApiSimca.MeasurementcontrollerApi();

var measurementId = 56; // Number | Id of the measurement to be fetched


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMeasurementByIdUsingGET(measurementId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **measurementId** | **Number**| Id of the measurement to be fetched | 

### Return type

[**MeasurementDTO**](MeasurementDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getMeasurementUsingGET"></a>
# **getMeasurementUsingGET**
> MeasurementsDTO getMeasurementUsingGET(opts)

Get measurements (optional filters)

Fetch a list of measurements. Measurements can be filtered by a combination of date, time, place and/or pollutant filters.

### Example
```javascript
var ApiSimca = require('api_simca');

var apiInstance = new ApiSimca.MeasurementcontrollerApi();

var opts = { 
  '_date': "_date_example", // String | Date filter
  'time': "time_example", // String | Time filter
  'place': "place_example", // String | Place filter
  'pollutant': "pollutant_example" // String | Pollutant filter
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMeasurementUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**| Date filter | [optional] 
 **time** | **String**| Time filter | [optional] 
 **place** | **String**| Place filter | [optional] 
 **pollutant** | **String**| Pollutant filter | [optional] 

### Return type

[**MeasurementsDTO**](MeasurementsDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

