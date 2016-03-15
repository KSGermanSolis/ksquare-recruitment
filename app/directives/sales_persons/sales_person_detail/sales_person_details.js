/**
 * Created by gsolis on 3/9/16.
 */

import template from './sales_person_details.html'
import style from './sales_person_details.less'

export default appModule => {
  appModule.directive('salesPersonDetails', ['$compile', '$mdDialog', '$mdToast', 'SalesPerson', ($compile, $mdDialog, $mdToast, SalesPerson) => {
    const link = function(scope, element){
      scope.render = function(){
        element.html(template).show();
        $compile(element.contents())(scope);
      }
    };
    const controller = ['$scope', function($scope){
      let self = this;
      $scope.$watch('user', function(user){
        self.salesPerson = user;
        $scope.render();
      });
      self.edit = function(){
        $scope.onEdit();
      };
      self.delete = function(ev){
        var confirm = $mdDialog.confirm()
          .title('Are you sure to delete this sales person?')
          .textContent('The sales person will be removed.')
          .ariaLabel('Delete Sales Person')
          .targetEvent(ev)
          .ok('Yes')
          .cancel('No');
        $mdDialog.show(confirm).then(function() {
          SalesPerson.remove(self.salesPerson.id).then((message)=>{
            $mdToast.show($mdToast.simple().textContent(message).hideDelay(3000));
            $scope.onDelete();
          }, (response)=>{
            $mdToast.show($mdToast.simple().textContent(response.data).hideDelay(3000));
          });
        });
      };
    }];
    return {
      restrict: 'E',
      scope: {
        user: '=',
        onEdit: '&',
        onDelete: '&'
      },
      link,
      controller,
      controllerAs: 'vm',
      template
    }
  }])
}