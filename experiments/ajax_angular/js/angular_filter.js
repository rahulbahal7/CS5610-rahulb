var app = angular.module("app1", []);
app.controller("ctrl1", function ($scope) {
    $scope.books = [
   { name: "Abc", price: 100 },
   { name: "Def", price: 200 },
   { name: "Pqr", price: 300 },
   { name: "Xyz", price: 400 },
   ];
    $scope.filterFunction = function (element) {
        return element.name.match(/^Ma/) ? true : false;
    };
});