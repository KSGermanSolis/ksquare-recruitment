/**
 * Created by gsolis on 3/11/16.
 */

import template from './recruiter_form.html'
import style from './recruiter_form.less'

export default appModule => {
  appModule.directive('recruiterForm', ['$compile', 'Recruiter', ($compile, Recruiter) => {
    const link = (scope, element) => {
      scope.render = () => {
        element.html(template).show();
        $compile(element.contents())(scope);
      }
    };
    const controller = ['$scope', function($scope){
      let self = this;
      $scope.$watch('recruiter', (recruiter) => {
        self.recruiter = recruiter ? recruiter : { firstName: '', lastName: '', email: '', commissionType: 'percentage', commission: ''};
        self.title = self.recruiter.id ? `Edit ${self.recruiter.firstName} ${self.recruiter.lastName}` : 'New Recruiter';
        $scope.render();
      });
      self.save = function(){
        if(isValidRecruiter()){
          Recruiter.save(self.recruiter).then(function(_recruiter){
            $scope.onSave({recruiter: _recruiter});
            self.recruiter = { firstName: '', lastName: '', email: '', commissionType: 'percentage', commission: ''};
          }, function(response){
            console.log(response.data);
          })
        }
      };
      self.cancel = function(){
        $scope.onCancel();
      };

      function isValidRecruiter(){
        let isValid = true;
        if(self.recruiter.firstName.trim() === '' ||
           self.recruiter.lastName.trim() === '' ||
           self.recruiter.email.trim() === '' ||
           self.recruiter.commission.trim() === '')
          isValid = false;

        return isValid;
      }
    }];
    return {
      restrict: 'E',
      scope: {
        recruiter: '=',
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