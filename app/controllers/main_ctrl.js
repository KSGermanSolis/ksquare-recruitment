/**
 * Created by gsolis on 3/8/16.
 */

export default appModule => {
  appModule.controller('MainCtrl', ['$scope', '$location', 'AuthTokenFactory', 'OriginalPathFactory', function($scope, $location, AuthTokenFactory, OriginalPathFactory){
    let self = this;

    $scope.$on('$routeChangeStart', function (e, next, current) {
      console.log(next.$$route.originalPath);
      self.isUserLoggedIn = AuthTokenFactory.getToken() != null;
      //if(next.$$route.originalPath === '/'){
      //  next.$$route.templateUrl = self.isUserLoggedIn ? 'views/home/dashboard.html' : 'views/login/login.html';
      //}

      if (!next.allowAnonymous && !self.isUserLoggedIn) {
        OriginalPathFactory.setPath($location.$$path);
        $location.path('/login');
      }

    });
  }])
}