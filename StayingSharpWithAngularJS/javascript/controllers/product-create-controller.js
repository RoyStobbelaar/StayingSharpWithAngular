//angular.module('tutorialApp', ['ui.router'])
tutorialApp.controller('ProductCreateController', ['$http', function ($http) {

   var controller = this;

   controller.text = "NewProductController calling!";

   this.product = {};

   $http({ method: 'GET', url: '/data/products.json' }).success(function (data) {
      /*Get number of products -> decide id of new product*/
      controller.product.id = data.products.length+1;
   });

   console.log(controller);

   controller.products = [];

   this.addProduct = function (product) {
      controller.products.push(product);
      //this.product = {};
   };

   /*Save newly created product (seems to be impossible :/)*/
   //this.saveProduct = function (product) {
   //   console.log(product);
   //   controller.errors = null;
      
   //   var uri = "data:application/json;charset=UTF-8," + encodeURIComponent(product);

   //   $http({ method: 'POST', url: '/data/products.json', data: uri, headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } })
   //   .catch(function (product) {
   //      controller.errors = product.data.error;
   //   })
   //};

}]);