/*
 * Generate a token to authenticate with the Crowd Valley API
*/

var cvApi = require("./cv-api.js");

// Enter your Crowd Valley API Key and Secret
var apiKey = 'quantum-001';
var apiSecret = '1487917825'

// Enter your Username and Password
var username = 'Anastasia';
var password = 'molodyko1905';

// Enter your Network Name
var network = 'quantum';

// Enter the API endpoint. This should be "https://sandbox.crowdvalley.com/v1" 
// unless you have a paid account with Crowd Valley and you are using the live API
var apiBase = "https://sandbox.crowdvalley.com/v1";

//
//
// No need to touch anything below this line
//
//

// if API is under Basic Authentication, enter BasicAuth username and password
var apiBasicUsername = '';
var apiBasicPassword = '';


var authHeader = cvApi.createAuthHeader(apiKey,apiSecret,network,username,password,apiBasicUsername,apiBasicPassword);
console.log("AUTHHEADER: " + authHeader["cv-auth"])

