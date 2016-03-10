/**
 * Created by gsolis on 3/9/16.
 */

export default appModule => {
  appModule.directive('goToPath', ['$location', ($location) => {
    return (scope, element, attrs) => {
      element.on('click', function(e){
        e.stopPropagation();
        if(element.get(0).tagName === 'A') e.preventDefault();
        $location.path(attrs.goToPath);
        scope.$apply();
      })
    }
  }]);
}