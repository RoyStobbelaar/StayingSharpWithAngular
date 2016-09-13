angular.module('tutorialApp')
.controller('UsersController', function () {


   /* Create some data here... */

   this.text = "Users!";

   this.sortType = "name";

   this.users = [
      {
         name: "Roy Stobbelaar",
         birthdate: new Date(1989,03,14,0,0,0,0),
         school: "Windesheim",
         image: "/images/default.png"
      }, {
         name: "Kazura Ryozaki",
         birthdate: new Date(1992, 11, 11, 0, 0, 0, 0),
         school: "Windesheim",
         image: "/images/default.png"
      }, {
         name: "Jos Klomp",
         birthdate: new Date(1988, 02, 08, 0, 0, 0, 0),
         school: "Deltion",
         image: "/images/default.png"
      }, {
         name: "Patrick Manskoop",
         birthdate: new Date(1993, 07, 21, 0, 0, 0, 0),
         school: "Saxion",
         image: "/images/default.png"
      }, {
         name: "Niek Bosscher",
         birthdate: new Date(1991, 09, 25, 0, 0, 0, 0),
         school: "Saxion",
         image: "/images/default.png"
      }
   ]
})

.directive("userRow", function () {
   return {
      restrict: 'E',
      templateUrl: '/snippets/user-row.html'
   };
});