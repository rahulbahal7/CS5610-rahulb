var app = angular.module("DemoApp", []);

// Retrieve search information
app.controller("GitHubCtrl", function ($scope, $http) {
    $scope.getGitInfo = function () {
        $scope.userNotFound = false;
        $scope.loaded = false;
        $scope.pages = 0;
        //$scope.page_no =1;
        $scope.upper_bound = 1;
        $scope.lower_bound = 1;

        $http.get("https://api.github.com/search/users?q=" + $scope.username +
         "+repos:%3E0+followers:%3E0&page=" + $scope.page_no).success(
         function (data) {
             //console.log(data);
             $scope.searchedUsers = data;
             $scope.totalResults = $scope.searchedUsers.total_count;
             $scope.pages = Math.ceil($scope.totalResults / 30);
             //console.log($scope.pages);

             if ($scope.page_no == null)
                 $scope.page_no = 1;

             $scope.lower_bound = ($scope.page_no - 1) * 30;
             $scope.upper_bound = $scope.lower_bound + 30;

             if ($scope.page_no == $scope.pages)
                 $scope.upper_bound = $scope.pages * 30 - ($scope.pages * 30 - $scope.totalResults);
             $scope.searchItems = $scope.searchedUsers.items;
         });

        $http.get("https://api.github.com/users/" + $scope.username)
        .success(function (data) {
            if (data.name == "") data.name = data.login;
            //console.log(data);
            $scope.user = data;
            $scope.loaded = true;
        })
        .error(function () {
            $scope.userNotFound = true;
        });

        $http.get("https://api.github.com/users/" + $scope.username + "/repos").success(function (data) {
            $scope.repos = data;
            //console.log(data);
            $scope.reposFound = data.length > 0;
        });
    }
});