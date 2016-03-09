/**
 * Created by gsolis on 3/8/16.
 */
import loginTpl from './login.html'
import loginStyle from './login.less'

export default appModule => {
  appModule.directive('login', ['$mdToast', '$location', 'User', 'AuthTokenFactory', 'OriginalPathFactory', function($mdToast, $location, User, AuthTokenFactory, OriginalPathFactory){
    let link = function(){

    };
    let controller = ['$scope', function ($scope){
      let vm = this;
      vm.credentials = { userId: '', password: '' };

      vm.login = function(){
        User.login(vm.credentials).then(function(data){
          AuthTokenFactory.setToken(data.token);
          User.setUser(data.user);
          var path = OriginalPathFactory.getPath();
          path = path ? path : '/';
          OriginalPathFactory.setPath();
          $location.path(path);
        }, function(response){
          $mdToast.show(
            $mdToast.simple()
              .textContent(response.data)
              .hideDelay(3000)
          );
        });
      }
    }];

    return {
      restrict: 'E',
      scope: {},
      link,
      controller,
      controllerAs: 'vm',
      template: loginTpl
    }
  }])
}