var sampleApp = angular.module('sampleApp', []);

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/DispSong/:songId', {
	templateUrl: 'pages/show_song.html',
	controller: 'SongController'
      });
}]);


sampleApp.controller('SongController', function ($scope, $routeParams) {

	
	$scope.song_id = $routeParams.songId;

});
