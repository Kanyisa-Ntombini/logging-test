# Testing logger for Add Logging To Password Checker

## Description

I have created this project to check if I am able to create a logger that logs errors to the errors.log file when doing jasmine testing.

The first function, printLogsOnly, just logs to the console and doesn't return anything. 
The second function, returnBooleanValue, returns either true or false according to the input parameter. It logs to the console.
The last function, throwError, logs to the console and throws an error.

## Findings

All three functions successfully log to the console. When each function is called in the index.js file, the function logs to the console and errors are logged to the errors.log file that is generated.
When I use the `npm test` command on all three functions, the functions log to the console but the errors.log file is not generated.