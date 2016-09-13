tutorialApp.config(function ($stateProvider, $urlRouterProvider) {

   $urlRouterProvider.otherwise("/default");

   /*Set default state*/
   $stateProvider.state('default', {
      url: "/default",
      templateUrl: "templates/pages/default.html",
      controller: "DefaultController",
      controllerAs: "defaultController"
   })
   .state('stateUsers.user', {
      url: "/user/:id",
      templateUrl: "templates/pages/users/user.html",
      controller: "UserController",
      controllerAs: "userController"
   })
   .state('stateUsers.list', {
      url: "/list",
      templateUrl: "templates/pages/users/userList.html",
      controller: "UsersController",
      controllerAs: "usersController"
   })
   .state('stateUsers', {
      url: "/stateUsers",
      templateUrl: "templates/pages/users/index.html",
      controller: "UsersController",
      controllerAs: "usersController"
   })
   .state('stateProducts', {
      url: "/stateProducts",
      templateUrl: "templates/pages/products/index.html",
      controller: "ProductsController",
      controllerAs: "productsController"
   })
   .state('stateProducts.list', {
      url: "/list",
      templateUrl: "templates/pages/products/productList.html",
      controller: "ProductsController",
      controllerAs: "productsController"
   })
   .state('stateProducts.product', {
      url: "/product/:id",
      templateUrl: "templates/pages/products/product.html",
      controller: "ProductController",
      controllerAs: "productController"
   })
   .state('stateProducts.new', {
      url: "/new",
      templateUrl: "templates/pages/products/newproduct",
      controller: "ProductCreateController"
   });
});