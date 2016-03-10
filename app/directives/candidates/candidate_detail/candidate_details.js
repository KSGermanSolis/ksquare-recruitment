/**
 * Created by gsolis on 3/9/16.
 */

import template from './candidate_details.html'
import style from './candidate_details.less'

export default appModule => {
  appModule.directive('candidateDetails', ['$compile', '$mdDialog', 'Candidate', ($compile, $mdDialog, Candidate) => {
    const link = function(scope, element){
      scope.render = function(){
        element.html(template).show();
        $compile(element.contents())(scope);
      }
    };
    const controller = ['$scope', function($scope){
      let self = this;
      $scope.$watch('candidate', function(candidate){
        self.candidate = candidate;
        $scope.render();
      });
      self.edit = function(){
        $scope.onEdit();
      };
      self.delete = function(ev){
        var confirm = $mdDialog.confirm()
          .title('Are you sure to delete this candidate?')
          .textContent('The candidate will be removed.')
          .ariaLabel('Delete Candidate')
          .targetEvent(ev)
          .ok('Yes')
          .cancel('No');
        $mdDialog.show(confirm).then(function() {
          Candidate.remove(self.candidate.id).then(function(){
            $scope.onDelete();
          }, function(response){
            console.log(response.data);
          })
        });
      };
    }];
    return {
      restrict: 'E',
      scope: {
        candidate: '=',
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