/**
 * Created by gsolis on 3/9/16.
 */

import template from './candidate_form.html'
import formStyle from './candidate_form.less'

export default appModule => {
  appModule.directive('candidateForm', ['$compile', '$q', '$timeout', 'Candidate', 'Recruiter', ($compile, $q, $timeout, Candidate, Recruiter) => {
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
        console.log(self.candidate);
        Candidate.save(self.candidate).then(function(_candidate){
          $scope.onSave({candidate: _candidate});
        }, function(response){
          console.log(response.data);
        })
      };
      self.cancel = function(){
        $scope.onCancel();
      };

      /*Recruiter autocomplete*/
      self.recruiters = [];
      Recruiter.getAll().then((recruiters) => {
        self.recruiters = recruiters;
        //self.candidate.recruiterId = '18e6e903-7e6c-420e-9567-6a36f8e4e959';
      });
      self.selectedRecruiter = null;
      self.loadRecruiters = function(){
        return $timeout(function() {
          self.recruiters;
        }, 250);
      };

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