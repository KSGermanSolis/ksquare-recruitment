/**
 * Created by gsolis on 3/9/16.
 */

import template from './candidate_details.html'
import enterHoursTpl from './enter_hours.html'
import style from './candidate_details.less'

export default appModule => {
  appModule.directive('candidateDetails', ['$compile', '$mdDialog', '$mdBottomSheet', 'Candidate', ($compile, $mdDialog, $mdBottomSheet, Candidate) => {
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
      self.showEnterHours = function(){
        $mdBottomSheet.show({
          controller: function(){
            let vm = this;
            vm.user = self.candidate;
            vm.months = ['Year', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            Candidate.getHours(vm.user.id).then((userHours) => {
              vm.userHours = userHours;
            });
            vm.saveHours = function(){
              Candidate.saveHours(vm.userHours).then(function (message) {
                console.log(message);
                vm.closeEnterHours();
              }, function(response){
                console.log(response.data);
              });
            };
            vm.closeEnterHours = function(){
              $mdBottomSheet.hide();
            }
          },
          controllerAs: 'vm',
          template: enterHoursTpl,
          parent: angular.element(document.querySelector('#candidate_content'))
        });
      }
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