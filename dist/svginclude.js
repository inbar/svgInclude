(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('dgn.svginclude.config', [])

  // Modules
  
  angular.module('dgn.svginclude.directives', []);
  
  angular.module('dgn.svginclude',
      [
        'dgn.svginclude.config',
        'dgn.svginclude.directives'
      ]);

})(angular);

angular.module('dgn.svginclude.directives')
  .directive('svginclude', [function() {
      return {
        
      }
  }
])