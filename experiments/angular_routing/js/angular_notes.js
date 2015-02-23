var app = angular.module("noteApp", []);
app.controller("noteController", function($scope) {
    $scope.message = "";
    $scope.left  = function() {return 140 - $scope.message.length;};
    $scope.clear = function() {$scope.message = "";};
    $scope.save  = function() {alert("Note Saved : "+$scope.message);};
});