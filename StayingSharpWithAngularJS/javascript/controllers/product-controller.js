angular.module('tutorialApp')
.controller('ProductController', function ($routeParams) {

   this.id = $routeParams.id;

   /* Create some data here... */

   this.text = "This is the default controller.";

   console.log(this.id);

   /* Load product info depending on routeparam */

   this.product = [];

   switch (this.id) {
      case '1':
         console.log("hit switch case");

         this.product = {
            id: 1,
            name: "testproduct#1",
            image: "/images/testproduct.png",
            price: 41426
         }
         break;

      case '2':
         this.product = {
            id: 2,
            name: "testproduct#2",
            image: "/images/testproduct.png",
            price: 214
         }
         break;

      case '3':
         this.product = {
            id: 3,
            name: "testproduct#3",
            image: "/images/testproduct.png",
            price: 5412
         }
         break;

      case '4':
         this.product = {
            id: 4,
            name: "testproduct#4",
            image: "/images/testproduct.png",
            price: 7454241
         }
         break;
   }

});