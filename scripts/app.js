angular
  .module("ngClassifieds", ["ngMaterial", "ngAnimate", "ngAria"])
  .config(function($mdThemingProvider) {

    $mdThemingProvider.theme("default")
      .primaryPalette("teal")
      .accentPalette("orange");
  })
  .directive("helloWorld", function() {
    return {
      template: "<h1>Hello World</h1>"
    }
  });