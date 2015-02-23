var pageApp = angular.module('demoApp', ['ngRoute']);

pageApp.config(function ($routeProvider) {
    $routeProvider        
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        });
});

pageApp.controller('mainController', function ($scope) {
    $scope.message = 'Welcome!';
});

pageApp.controller('aboutController', function ($scope) {
    $scope.message = 'About Page';
});

pageApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us!';
});