(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('svginclude.config', [])

  // Modules
  
  angular.module('svginclude.directives', []);
  
  angular.module('svginclude',
      [
        'svginclude.config',
        'svginclude.directives'
      ]);

})(angular);

angular.module('svginclude.directives')
  .directive('svginclude', [function() {
      return {
        
      }
  }
])