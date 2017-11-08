# ApiSimca.TransactioncontrollerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPollutantUsingPOST1**](TransactioncontrollerApi.md#createPollutantUsingPOST1) | **POST** /api/transaction/v1/donation | Handle transaction


<a name="createPollutantUsingPOST1"></a>
# **createPollutantUsingPOST1**
> createPollutantUsingPOST1(opts)

Handle transaction

### Example
```javascript
var ApiSimca = require('api_simca');

var apiInstance = new ApiSimca.TransactioncontrollerApi();

var opts = { 
  'statePol': 56, // Number | Transaction state
  'referenceSale': "referenceSale_example", // String | Transaction reference in SIMCA
  'referencePol': "referencePol_example", // String | Transaction reference in PayU
  'sign': "sign_example", // String | Signature
  'value': 1.2, // Number | Transaction value
  'test': true // Boolean | Test indicator
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createPollutantUsingPOST1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **statePol** | **Number**| Transaction state | [optional] 
 **referenceSale** | **String**| Transaction reference in SIMCA | [optional] 
 **referencePol** | **String**| Transaction reference in PayU | [optional] 
 **sign** | **String**| Signature | [optional] 
 **value** | **Number**| Transaction value | [optional] 
 **test** | **Boolean**| Test indicator | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

