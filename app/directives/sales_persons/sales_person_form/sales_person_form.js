/**
 * Created by gsolis on 3/11/16.
 */

import template from './sales_person_form.html'
import style from './sales_person_form.less'

export default appModule => {
  appModule.directive('salesPersonForm', ['$compile', 'SalesPerson', ($compile, SalesPerson) => {
    const link = (scope, element) => {
      scope.render = () => {
        element.html(template).show();
        $compile(element.contents())(scope);
      }
    };
    const controller = ['$scope', function($scope){
      let self = this;
      $scope.$watch('user', (user) => {
        self.salesPerson = user ? user : { firstName: '', lastName: '', email: '', commissionType: 'percentage', commission: ''};
        self.title = self.salesPerson.id ? `Edit ${self.salesPerson.firstName} ${self.salesPerson.lastName}` : 'New Sales Person';
        $scope.render();
      });
      self.save = function(){
        if(isValidUser()){
          SalesPerson.save(self.salesPerson).then(function(_salesPerson){
            $scope.onSave({user: _salesPerson});
            self.salesPerson = { firstName: '', lastName: '', email: '', commissionType: 'percentage', commission: ''};
          }, function(response){
            console.log(response.data);
          })
        }
      };
      self.cancel = function(){
        $scope.onCancel();
      };

      function isValidUser(){
        let isValid = true;
        if(self.salesPerson.firstName.trim() === '' ||
           self.salesPerson.lastName.trim() === '' ||
           self.salesPerson.email.trim() === '' ||
           self.salesPerson.commission.trim() === '')
          isValid = false;

        return isValid;
      }
    }];
    return {
      restrict: 'E',
      scope: {
        user: '=',
        onSave: '&',
        onCancel: '&'
      },
      link,
      controller,
      controllerAs: 'vm',
      template
    }
  }])
}