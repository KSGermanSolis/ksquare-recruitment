/**
 * Created by gsolis on 3/15/16.
 */

export default appModule => {
  appModule.controller('SalesPersonsCtrl', ['$scope', '$mdToast', 'SalesPerson', function($scope, $mdToast, SalesPerson){
    $scope.users = [];
    $scope.user = null;
    SalesPerson.getAll().then(function(salesPersons){
      $scope.users = salesPersons;
    });
    $scope.search = '';
    $scope.usersFilter = function(user){
      var regex = new RegExp($scope.search, 'gi');
      return $scope.search === '' ? true : regex.test(user.firstName +' '+ user.lastName);
    };
    $scope.currentView = 'none';
    $scope.showAddForm = function(){
      $scope.user = null;
      $scope.currentView = 'user_add_edit';
    };
    $scope.onSave = function(user){
      addUser(user);
      $scope.selectUser(user);
    };
    $scope.onCancel = function(){
      if($scope.user != null){
        $scope.selectUser($scope.user);
      }else
        $scope.currentView = 'none';
    };
    $scope.onDelete = function(){
      $scope.users.splice($scope.users.indexOf($scope.user), 1);
      $scope.user = null;
      $scope.currentView = 'none';
    };
    $scope.selectUser = function(user){
      $scope.user = user;
      $scope.currentView = 'user_details';
    };
    $scope.onEdit = function(){
      $scope.currentView = 'user_add_edit';
    };

    function addUser(user){
      let index = -1;
      $scope.users.forEach(function(_user, _index){
        if(_user.id === user.id)
          index = _index;
      });
      if(index !== -1)
        $scope.users[index] = user;
      else
        $scope.users.push(user);
    }
  }])
}