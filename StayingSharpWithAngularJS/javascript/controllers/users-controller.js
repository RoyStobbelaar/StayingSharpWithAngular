angular.module('tutorialApp')
.controller('UsersController', ['$http',function ($http) {

   this.text = "Users!";

   this.sortType = "name";

   var controller = this;

   /*Retrieve user data*/
   $http({ method: 'GET', url: '/data/users.json' }).success(function (data) {
      controller.users = data;
   });

}])

.directive("userRow", function () {
   return {
      restrict: 'E',
      templateUrl: '/snippets/user-row.html'
   };
})
.directive("userSort", function () {
   return {
      restrict: 'E',
      templateUrl: '/snippets/user-sort.html'
   };
});