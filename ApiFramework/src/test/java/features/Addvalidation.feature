Feature: Validating place APIs
@AddPlace
Scenario Outline: Verify place is getting added sucessfully using addplace API
Given Add place payload for "<name>" "<phone_number>" "<address>"
When user calls "AddAPI" with "POST" http request
Then Add API is added sucessfully with success status code 200
And "status" in response body is "OK"
And "scope" in response body is "APP"
And verify mapped "<name>" from addplace is same in "GETAPI"
Examples:
|      name    | phone_number   | address   |
|    Subha     |  946834765795  |  pk street   |
|    Subha R    |  94638768  |  OK street   |
@UpdatePlace
Scenario: Verify Update place api

Given Add Update payload
When user calls "UPDATEAPI" with "PUT" http request
Then Add API is added sucessfully with success status code 200
@DeletePlace
Scenario: verify delete place api

Given Add Delete payload
When user calls "DELETEAPI" with "POST" http request
Then Add API is added sucessfully with success status code 200




