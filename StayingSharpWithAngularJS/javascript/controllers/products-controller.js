angular.module('tutorialApp')
.controller('ProductsController', function () {


   /* Create some data here... */

   this.text = "Products!";

   this.products = [
      {
         id:1,
         name: "testproduct#1",
         image: "/images/testproduct.png",
         price: 41426
      },
            {
               id: 2,
               name: "testproduct#2",
               image: "/images/testproduct.png",
               price: 214
            },
                  {
                     id: 3,
                     name: "testproduct#3",
                     image: "/images/testproduct.png",
                     price: 5412
                  },
                        {
                           id: 4,
                           name: "testproduct#4",
                           image: "/images/testproduct.png",
                           price: 7454241
                        }

   ];

})
.directive('productRow', function () {
   return {
      restrict: 'E',
      templateUrl: 'snippets/product-row.html'
   };
});