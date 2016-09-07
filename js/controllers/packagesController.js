angular.module('devmtnTravel').controller('packagesController', function($scope, mainService) {


  $scope.test = 'Can you see me?';


  $scope.travelInfo = mainService.travelInfo;


});
