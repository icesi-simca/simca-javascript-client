# ApiSimca.PollutantcontrollerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPollutantUsingPOST**](PollutantcontrollerApi.md#createPollutantUsingPOST) | **POST** /api/pollutant/v1/pollutant | Create a pollutant
[**deletePollutantUsingDELETE**](PollutantcontrollerApi.md#deletePollutantUsingDELETE) | **DELETE** /api/pollutant/v1/pollutant/{idPollutant} | Delete a pollutant
[**editPollutantUsingPUT**](PollutantcontrollerApi.md#editPollutantUsingPUT) | **PUT** /api/pollutant/v1/pollutant | Edit a pollutant
[**getPollutantUsingGET**](PollutantcontrollerApi.md#getPollutantUsingGET) | **GET** /api/pollutant/v1/pollutant/{idPollutant} | Get a pollutant
[**getPollutantsUsingGET**](PollutantcontrollerApi.md#getPollutantsUsingGET) | **GET** /api/pollutant/v1/pollutants | Get all pollutants


<a name="createPollutantUsingPOST"></a>
# **createPollutantUsingPOST**
> createPollutantUsingPOST(addPollutantDTO)

Create a pollutant

Create a pollutant. Specify the correct measurement units

### Example
```javascript
var ApiSimca = require('api_simca');
var defaultClient = ApiSimca.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiSimca.PollutantcontrollerApi();

var addPollutantDTO = new ApiSimca.AddPollutantDTO(); // AddPollutantDTO | addPollutantDTO


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createPollutantUsingPOST(addPollutantDTO, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addPollutantDTO** | [**AddPollutantDTO**](AddPollutantDTO.md)| addPollutantDTO | 

### Return type

null (empty response body)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deletePollutantUsingDELETE"></a>
# **deletePollutantUsingDELETE**
> deletePollutantUsingDELETE(idPollutant)

Delete a pollutant

Delete a pollutant by a given pollutant id

### Example
```javascript
var ApiSimca = require('api_simca');
var defaultClient = ApiSimca.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiSimca.PollutantcontrollerApi();

var idPollutant = 56; // Number | Pollutant id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePollutantUsingDELETE(idPollutant, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idPollutant** | **Number**| Pollutant id | 

### Return type

null (empty response body)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="editPollutantUsingPUT"></a>
# **editPollutantUsingPUT**
> editPollutantUsingPUT(pollutantDTO)

Edit a pollutant

Edit a pollutat with a given id. All values must be vaid

### Example
```javascript
var ApiSimca = require('api_simca');
var defaultClient = ApiSimca.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ApiSimca.PollutantcontrollerApi();

var pollutantDTO = new ApiSimca.PollutantDTO(); // PollutantDTO | pollutantDTO


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.editPollutantUsingPUT(pollutantDTO, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pollutantDTO** | [**PollutantDTO**](PollutantDTO.md)| pollutantDTO | 

### Return type

null (empty response body)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getPollutantUsingGET"></a>
# **getPollutantUsingGET**
> PollutantDTO getPollutantUsingGET(idPollutant)

Get a pollutant

Get a pollutant by a given pollutant id

### Example
```javascript
var ApiSimca = require('api_simca');

var apiInstance = new ApiSimca.PollutantcontrollerApi();

var idPollutant = 56; // Number | Pollutant id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPollutantUsingGET(idPollutant, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idPollutant** | **Number**| Pollutant id | 

### Return type

[**PollutantDTO**](PollutantDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getPollutantsUsingGET"></a>
# **getPollutantsUsingGET**
> PollutantsDTO getPollutantsUsingGET()

Get all pollutants

Get all registered pollutants

### Example
```javascript
var ApiSimca = require('api_simca');

var apiInstance = new ApiSimca.PollutantcontrollerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPollutantsUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PollutantsDTO**](PollutantsDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

