# ApiSimca.DatacontrollerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMeasurementPollutantDataUsingGET**](DatacontrollerApi.md#getMeasurementPollutantDataUsingGET) | **GET** /api/data/v1/data | getMeasurementPollutantData


<a name="getMeasurementPollutantDataUsingGET"></a>
# **getMeasurementPollutantDataUsingGET**
> MeasurementDataDTO getMeasurementPollutantDataUsingGET(measurementId, pollutantId)

getMeasurementPollutantData

### Example
```javascript
var ApiSimca = require('api_simca');

var apiInstance = new ApiSimca.DatacontrollerApi();

var measurementId = 56; // Number | measurementId

var pollutantId = 56; // Number | pollutantId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMeasurementPollutantDataUsingGET(measurementId, pollutantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **measurementId** | **Number**| measurementId | 
 **pollutantId** | **Number**| pollutantId | 

### Return type

[**MeasurementDataDTO**](MeasurementDataDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

