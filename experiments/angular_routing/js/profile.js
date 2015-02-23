var app = angular.module("CourseApp", ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
     when('/home', {
         templateUrl: 'pages/home_login.html'
     }).
     when('/profile/:username', {
         templateUrl: 'pages/profile_login.html',
         controller: 'ProfileController'
     }).
     when('/contact', {
         templateUrl: 'pages/contact_login.html'
     }).
     when('/about', {
         templateUrl: 'pages/about_login.html'
     }).
     otherwise({
         redirectTo: '/home'
     });
}]);

app.controller("ProfileController", function ($scope, UserService, $routeParams) {
    var username = $routeParams.username;
    $scope.username = username;
});

app.controller("NavController", function ($scope, UserService) {
    $scope.currentUser = null;
    $scope.login = function () {

        var username = $scope.username;
        var password = $scope.password;
        $scope.currentUser = UserService.login(username, password);

    }

});
app.factory("UserService", function () {
    var currentuser = null;
    var users = [
        { username: "john", password: "john" },
        { username: "mike", password: "mike" },
        { username: "roy", password: "roy" }
    ]
    var login = function (username, password) {
        for (var u in users) {
            if (users[u].username == username) {
                currentuser = users[u];
                return users[u];
            }
        }
        return null;
    };
    var getCurrentuser = function () {
        return currentuser;
    }
    return {
        login: login,
        getCurrentuser: getCurrentuser
    }
});