/**
 * Created by gsolis on 3/9/16.
 */

import template from './candidate_form.html'
import formStyle from './candidate_form.less'

export default appModule => {
  appModule.directive('candidateForm', ['$compile', 'Candidate', ($compile, Candidate) => {
    const link = function(scope, element){
      scope.render = function(){
        element.html(template).show();
        $compile(element.contents())(scope);
      }
    };
    const controller = ['$scope', function($scope){
      let self = this;
      $scope.$watch('candidate', function(candidate){
        self.candidate = candidate ? candidate : {};
        self.formTitle = self.candidate.id ? `Edit ${self.candidate.firstName} ${self.candidate.lastName}` : 'New Candidate';
        $scope.render();
      });
      self.save = function(){
        Candidate.save(self.candidate).then(function(_candidate){
          $scope.onSave({candidate: _candidate});
        }, function(response){
          console.log(response.data);
        })
      };
      self.cancel = function(){
        $scope.onCancel();
      }
    }];
    return {
      restrict: 'E',
      scope: {
        onCancel: '&',
        onSave: '&',
        candidate: '='
      },
      link,
      controller,
      controllerAs: 'vm',
      template: template
    }
  }])
}