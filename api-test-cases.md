| TC ID | Test Scenario | Test Data | Expected Result |Test type coverage|
|-------|---------------|-----------|-----------------|------|
| TC01 | Order created with valid data | Valid token + valid request body | HTTP 201 Created | Positive
| TC02 | No authorization token | No authorization header | HTTP 401 Unauthorized | Authentication |
| TC03 | Expired authorization token | Bearer token expired | HTTP 401 Unathorized | Authentication |
| TC04 | Missing required field | Remove `store_id` | HTTP 400 Bad Request | Boundary/Data Validation |
| TC05 | Quantity is zero | `quantity = 0` | HTTP 400 Validation Error |Boundary/Data Validation |
| TC06 | Empty items array | `"items": []` | HTTP 400 Validation Error |Boundary/Data Validation |
| TC07 | Invalid customization | `size = "ExtraHuge"` | HTTP 400 Invalid customization |Customizations |
| TC08 | Partial failure | One valid product +  one invalid product | Order rejected with error details | Partial Failure |
| TC09 | Invalid payment method | `payment_method_id = -1` | HTTP 400 Invalid payment method |Boundary/Data Validation |
| TC10 | Valid customizations | `size = "Large", milk = "Oat"` | HTTP 201 Created | Customizations|n