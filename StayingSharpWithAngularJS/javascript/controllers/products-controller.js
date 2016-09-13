//angular.module('tutorialApp', ['ui.router'])
tutorialApp.controller('ProductsController', ['$http', function ($http) {

   this.text = "Products!";

   var controller = this;
   controller.products = [];

   /*Retrieve product data*/
   $http({ method: 'GET', url: '/data/products.json' }).success(function (data) {
      controller.products = data;
      console.log(controller.products);
   });
   console.log(controller);
}])

.directive('productRow', function () {
   return {
      restrict: 'E',
      templateUrl: 'snippets/product-row.html'
   };
});