// const IPGeolocationAPI = require("ip-geolocation-api-javascript-sdk");
// let GeolocationParams = require("ip-geolocation-api-javascript-sdk/GeolocationParams.js");

// let APIKey = "e91bcf7bde07457ca16a728a40d9f19b";
// let ip = "110.227.253.92";
// const ipgeolocationApi = new IPGeolocationAPI(APIKey, false);

// // callback
// function response(locationDetails) {
//   console.log("locationDetails :>", locationDetails);
// }

// let geolocationParams = new GeolocationParams();
// geolocationParams.setIPAddress(ip);
// geolocationParams.setFields("geo");
// geolocationParams.setExcludes(" country_code2, country_code3");

// ipgeolocationApi.getGeolocation(response, geolocationParams);

// OR

const geoip = require("geoip-lite");
let ip = "110.227.253.92";
let geo = geoip.lookup(ip);
console.log(geo);
