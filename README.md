# BusReport

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.


# How to Run
 run npm install and then npm start

# Running unit tests

Run `ng test` to execute the unit tests via [Karma] There are 9 test cases in this application.

# Assumptions:

Color of Status is changing based on below rule:
 a. if deviation in route is greater than 200 then the status will be "Late" with "Red" color
 b. if deviation in route is less than 200  then the status will be "On time" with "Green" color
 c. if deviation in route is less than 0  then the status will be "Early" with "Blue" color
 d. if deviation in route is null  then the status will be Unknown with orange color
 
