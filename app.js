var app = angular.module('myApp', ['ngRoute']);
 
app.config(function($routeProvider) {
$routeProvider
 
.when('/', {
templateUrl : 'page1.html',
controller : 'FirstController'
})
 
.when('/database', {
templateUrl : 'page2.html',
controller : 'SecondController'
})
 
.when('/databasewithsearch', {
templateUrl : 'page3.html',
controller : 'ThirdController'
})
 
.otherwise({redirectTo: '/'});
});

    app.controller('FirstController', function($scope) {
    $scope.message = 'This site is under maintenence. Please check tomorrow.';
    });
     
    app.controller('SecondController', ['$scope', '$http', function($scope, $http)  {
        $scope.userData = undefined;
        var req = {
            method: 'GET',
            url: 'https://renil28.github.io/Angular-JS-SecurityPersonnelData/securitydata.json',
            headers: { 'Content-Type': 'application/json' }
        };
        
        
        $http(req).then(function (response) {
            $scope.userData  = response.data.securityemployee;
        });
      }]);
     
      app.controller('ThirdController', ['$scope', '$http', function($scope, $http)  {
        $scope.userData = undefined;
        var req = {
            method: 'GET',
            url: 'https://renil28.github.io/Angular-JS-SecurityPersonnelData/securitydata.json',
            headers: { 'Content-Type': 'application/json' }
        };
        
        
        $http(req).then(function (response) {
            $scope.userData  = response.data.securityemployee;
        });
      }]);
    