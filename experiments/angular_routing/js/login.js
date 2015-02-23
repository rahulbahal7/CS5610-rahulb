var app = angular.module("demoApp", ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
     when('/home', {
         templateUrl: 'pages/app_page_home.html'
     }).
     when('/profile/:username', {
             templateUrl: 'pages/app_page_profile.html',
              controller: 'ProfileController'
     }).
     when('/contact', {
             templateUrl: 'pages/app_page_contact.html'
     }).
     when('/about', {
             templateUrl: 'pages/app_page_about.html'
     }).
     otherwise({
         redirectTo: 'pages/app_page_home'
     });
}]);

app.controller("ProfileController", function ($scope, UserService,$routeParams) {
    var username = $routeParams.username;
    $scope.currentUser = UserService.getCurrentuser();
});

app.controller("NavController", function ($scope, UserService) {
    $scope.currentUser = null;
    $scope.login = function () {    
        var username = $scope.username;
        var password = $scope.password;
        $scope.currentUser=UserService.login(username, password);      
    }
    $scope.logout = function () {
        $scope.currentUser = null;
        UserService.logout();
        $scope.username = null;
        $scope.password = null;
    }
});
app.factory("UserService", function () {
    var currentuser = null;
    var users = [
        { username: "user1", password: "pass1" },
        { username: "user2", password: "pass2"},
        {username: "user3", password: "pass3"}
    ]
    var login = function(username,password){
        for(var u in users)
        {
            if(users[u].username == username)
            {
                currentuser = users[u];
                return users[u];
            }
        }
        return null;
    };
    var logout = function () {
        currentUser = null;
    }
    var getCurrentuser = function () {
        return currentuser;
    }
    return {
        login: login,
        logout: logout,
        getCurrentuser: getCurrentuser
    }
});
