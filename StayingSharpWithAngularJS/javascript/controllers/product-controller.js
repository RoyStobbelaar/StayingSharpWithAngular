//angular.module('tutorialApp', ['ui.router'])
tutorialApp.controller('ProductController', ['$filter', '$http', '$stateParams', function ($filter, $http, $stateParams) {

   this.id = $stateParams.id;

   var controller = this;

   this.text = "This is the default controller.";

   console.log(this.id);

   $http({ method: 'GET', url: '/data/products.json' }).success(function (data) {
      /*Get all products -> filter on id*/
      console.log(data);
      controller.product = $filter('filter')(data.products, { id: $stateParams.id })[0];
   });

   console.log(controller);

}]);