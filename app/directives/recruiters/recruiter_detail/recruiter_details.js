/**
 * Created by gsolis on 3/9/16.
 */

import template from './recruiter_details.html'
import style from './recruiter_details.less'

export default appModule => {
  appModule.directive('recruiterDetails', ['$compile', '$mdDialog', '$mdToast', 'Recruiter', ($compile, $mdDialog, $mdToast, Recruiter) => {
    const link = function(scope, element){
      scope.render = function(){
        element.html(template).show();
        $compile(element.contents())(scope);
      }
    };
    const controller = ['$scope', function($scope){
      let self = this;
      $scope.$watch('recruiter', function(recruiter){
        self.recruiter = recruiter;
        $scope.render();
      });
      self.edit = function(){
        $scope.onEdit();
      };
      self.delete = function(ev){
        var confirm = $mdDialog.confirm()
          .title('Are you sure to delete this recruiter?')
          .textContent('The recruiter will be removed.')
          .ariaLabel('Delete Recruiter')
          .targetEvent(ev)
          .ok('Yes')
          .cancel('No');
        $mdDialog.show(confirm).then(function() {
          Recruiter.remove(self.recruiter.id).then((message)=>{
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
        recruiter: '=',
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