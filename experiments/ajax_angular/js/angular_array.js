var app = angular.module("arrayController", []);

app.controller("arrayController", function ($scope) {
    var boston = {
        name: "Boston",
        country: "USA",
        temperature: "20",
    };
     var san_diego = {
        name: "San Diego",
        country: "USA",
        temperature: "60",
    };
    var cities = [boston, san_diego];
    $scope.cities = cities;
});