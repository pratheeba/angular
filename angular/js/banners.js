var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
    $scope.firstBanner_h1       = 'E-SHOPPER';
    $scope.firstBanner_h2       = 'Free E-Commerce Template';
    $scope.firstBanner_p        = 'This is my first banner';
    $scope.firstBanner_button   = 'Get it now';
    $scope.firstBanner_img1     = 'images/home/girl1.jpg';
    $scope.firstBanner_img2     = 'images/home/pricing.png';
    
    $scope.secondBanner_h1       = 'E-SHOPPER';
    $scope.secondBanner_h2       = 'Free E-Commerce Template';
    $scope.secondBanner_p        = 'This is my second banner';
    $scope.secondBanner_button   = 'Get it now';
    $scope.secondBanner_img1     = 'images/home/girl2.jpg';
    $scope.secondBanner_img2     = 'images/home/pricing.png';

    $scope.thirdBanner_h1       = 'E-SHOPPER';
    $scope.thirdBanner_h2       = 'Free E-Commerce Template';
    $scope.thirdBanner_p        = 'This is my third banner';
    $scope.thirdBanner_button   = 'Get it now';
    $scope.thirdBanner_img1     = 'images/home/girl3.jpg';
    $scope.thirdBanner_img2     = 'images/home/pricing.png';
});

app.controller('leftCategory', function($scope, $http){
    $http.get('http://localhost/angeshopper/json/sidebar_category.json').then(function(response){
        console.log(response.data.sidebar_category_name);
        $scope.myCategories = response.data.sidebar_category_name;
    });
});

app.controller('leftBrands', function($scope, $http){
    $http.get('http://localhost/angeshopper/json/sidebar_brand.json').then(function(response){
        console.log(response.data.sidebar_brands);
        $scope.myBrands = response.data.sidebar_brands;
    });
});

app.controller('homeFeaturesItems', function($scope, $http){
    $http.get('http://localhost/angeshopper/json/home_featureitems.json').then(function(response){
        console.log(response.data.home_features);
        $scope.myFeatures = response.data.home_features;
    });
});

app.controller('tabController', ['$scope', function($scope) {
    $scope.tab = 1;

    $scope.setTab = function(newVal){
        console.log(newVal);
        $scope.tab = newVal;
    }

    $scope.isSet = function(tabNum){
        return $scope.tab === tabNum;
    }
}]);

app.controller('recommendedItems', function($scope, $http){
    $http.get('http://localhost/angeshopper/json/home_recommendslider.json').then(function(response){
        console.log(response.data.recommended_slider);
        $scope.reCommend = response.data.recommended_slider;
    });
});
