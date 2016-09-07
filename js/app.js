angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html",
                // controller: 'adventurersController'
            })
            .state('adventurers',{
                url:'adventurers',
                parent:'home',
                templateUrl: "../views/about-adventurers.html",
                controller: 'adventurersController'
            })
            .state('contact',{
                url:'=contact',
                parent:'home',
                templateUrl: "../views/contact.html",
                controller: 'contactController'
            })
            .state('packages',{
                url:'/packages',
                templateUrl: "../views/packages.html",
                controller: 'packagesController',
                controllerAs: 'vm'
            })
            .state('booked',{
                // url:'/booked/:id',
                url:'/booked/:id/:city',
                templateUrl: "../views/booked.html",
                controller: 'bookedController',
                controllerAs: 'vm'
            })
            .state('locations',{
                url:'/locations',
                templateUrl: "../views/locations.html",
                controller: 'locationsController',
                controllerAs: 'vm'
            });

        $urlRouterProvider
            .otherwise('/');


    });
