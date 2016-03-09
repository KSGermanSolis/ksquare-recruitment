/**
 * Created by gsolis on 3/8/16.
 */

export default appModule => {
  appModule.controller('MainCtrl', ['$scope', '$location', 'User', 'AuthTokenFactory', 'OriginalPathFactory', function($scope, $location, User, AuthTokenFactory, OriginalPathFactory){
    let self = this;

    self.logout = function(){
      User.setUser();
      AuthTokenFactory.setToken();
      OriginalPathFactory.setPath();
      $location.path('/login');
    };

    $scope.$on('$routeChangeStart', function (e, next, current) {
      self.isUserLoggedIn = AuthTokenFactory.getToken() != null;
      if (!next.allowAnonymous && !self.isUserLoggedIn) {
        OriginalPathFactory.setPath($location.$$path);
        $location.path('/login');
      }
    });

  }])
}