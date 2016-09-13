angular.module('tutorialApp')
.config(function ($routeProvider) {

   $routeProvider.when('/products', {
      templateUrl: '/templates/pages/products/index.html',
      controller: 'ProductsController',
      controllerAs: 'productsController'
   })

   .when('/products/new', {
      templateUrl: '/templates/pages/products/newproduct.html',
      controller: 'ProductCreateController',
      controllerAs: 'newProductController'
   })

   .when('/products/:id', {
      templateUrl: '/templates/pages/products/product.html',
      controller: 'ProductController',
      controllerAs: 'productController'
   })

   .when('/users', {
      templateUrl: '/templates/pages/users/index.html',
      controller: 'UsersController',
      controllerAs: 'usersController'
   })

   .when('/', {
      templateUrl: '/templates/pages/default.html',
      controller: 'DefaultController',
      controllerAs: 'defaultController'
   })

   .otherwise({ redirectTo: '/' });
});