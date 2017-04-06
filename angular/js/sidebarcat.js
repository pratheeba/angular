var app = angular.module('myApp', []);
app.controller('leftCategory', function($scope,$http){
    $http.get('http://localhost/angeshopper/json/sidebar_category.json').then(function(response){
        $scope.myCategories = response.data;
    });
});