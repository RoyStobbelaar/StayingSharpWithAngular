angular.module('tutorialApp')
.controller('IndexController', function () {


   /* Create some data here... */

   this.text = "This is the index controller.";


})
.directive('navBar', function () {
   return {
      restrict: 'E',
      templateUrl: '/snippets/navbar.html'
   };
});