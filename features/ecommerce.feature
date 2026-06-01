Feature: ecommerce application
Scenario: placing the order
Given  login using given "username" and "password"
When add "productname" to cart
Then check whether the "productname" is showing in cart page
When enter the valid details and place the order
Then check whether order is present in orderhistory page
