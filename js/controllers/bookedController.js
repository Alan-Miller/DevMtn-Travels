angular.module('devmtnTravel').controller('bookedController', function($scope, $state, $stateParams, mainService) {


  $scope.idOfObject = $state.params.id;      // captures value of id passed in
  $scope.theCity = $state.params.city;
// then the rest below becomes unnecessary


  $scope.test = 'Can you see me?';

  var locations = mainService.travelInfo;

  // console.log($stateParams);
  //
  //
  // for (var i = 0; i < locations.length; i++) {
  //   if (locations[i].id == $stateParams.id) {
  //     $scope.booked = locations[i];
  //     console.log($scope.booked);
  //   }
  // }



});
