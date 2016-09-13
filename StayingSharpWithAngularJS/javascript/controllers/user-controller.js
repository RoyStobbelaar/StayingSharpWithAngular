//angular.module('tutorialApp', ['ui.router'])
tutorialApp.controller('UserController', ['$filter', '$http', '$stateParams' , function ($filter, $http, $stateParams) {

   var controller = this;

   console.log($stateParams.id);

   $http({ method: 'GET', url: '/data/users.json' }).success(function (data) {
      /*Get all users -> filter on id*/
      console.log(data);
      controller.user = $filter('filter')(data.users, { id: $stateParams.id })[0];
   });

   console.log(controller);

}]);