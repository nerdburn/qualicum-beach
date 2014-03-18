/*
 *  Project: Exching
 *  Description: Buy & sell preloved fashion and accessories.
 *
*/

// create app
var app = angular.module('app', ['ngResource', 'ngCookies', 'ngRoute', 'appServices', 'appDirectives', 'appFilters']);

// create empty modules
var appServices = angular.module('appServices', []);
var appDirectives = angular.module('appDirectives', []);
var appFilters = angular.module('appFilters', []);