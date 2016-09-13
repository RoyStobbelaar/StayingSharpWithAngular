angular.module('tutorialApp')
.controller('ProductController', ['$filter','$http','$routeParams',function ($filter,$http,$routeParams) {

   this.id = $routeParams.id;

   var controller = this;

   this.text = "This is the default controller.";

   console.log(this.id);

   $http({ method: 'GET', url: '/data/products.json' }).success(function (data) {
      /*Get all products -> filter on id*/
      console.log(data);
      controller.product = $filter('filter')(data.products, { id: $routeParams.id })[0];
   });

   console.log(controller);

}]);