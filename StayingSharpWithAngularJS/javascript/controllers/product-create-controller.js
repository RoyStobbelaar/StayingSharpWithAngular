angular.module('tutorialApp')
.controller('ProductCreateController', ['$http',function ($http) {

   var controller = this;

   this.text = "Heya ProductController here...";

   controller.text = "NewProductController calling!";

   /*Save newly created product*/
   //this.saveProduct = function (product) {

   //   controller.errors = null;

   //   $http({method:'POST', url:'/products', data:product})
   //   .catch(function (product) {
   //      controllers.errors = product.data.error;
   //   })
   //};

}]);