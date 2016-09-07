angular.module('devmtnTravel').controller('locationsController', function($scope, $stateParams, mainService) {

  $scope.travelInfo = mainService.travelInfo;

  $scope.test = 'Can you see me?';



  // if ($stateParams.id === 'shoes') {
  //   $scope.productData = productService.shoeData;
  // } else if ($stateParams.id === 'socks') {
  //   $scope.productData = productService.sockData;
  // }





});
