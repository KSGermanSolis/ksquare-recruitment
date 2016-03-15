/**
 * Created by gsolis on 3/11/16.
 */

export default appModule => {
  appModule.controller('RecruitersCtrl', ['$scope', '$mdToast', 'Recruiter', function($scope, $mdToast, Recruiter){
    $scope.recruiters = [];
    $scope.recruiter = null;
    Recruiter.getAll().then(function(recruiters){
      $scope.recruiters = recruiters;
    });
    $scope.search = '';
    $scope.recruitersFilter = function(recruiter){
      var regex = new RegExp($scope.search, 'gi');
      return $scope.search === '' ? true : regex.test(recruiter.firstName +' '+ recruiter.lastName);
    };
    $scope.currentView = 'none';
    $scope.showAddRecruiterForm = function(){
      $scope.recruiter = null;
      $scope.currentView = 'recruiter_add_edit';
    };
    $scope.onSave = function(recruiter){
      addRecruiter(recruiter);
      $scope.selectRecruiter(recruiter);
    };
    $scope.onCancel = function(){
      if($scope.recruiter != null){
        $scope.selectRecruiter($scope.recruiter);
      }else
        $scope.currentView = 'none';
    };
    $scope.onDelete = function(){
      $scope.recruiters.splice($scope.recruiters.indexOf($scope.recruiter), 1);
      $scope.recruiter = null;
      $scope.currentView = 'none';
    };
    $scope.selectRecruiter = function(recruiter){
      $scope.recruiter = recruiter;
      $scope.currentView = 'recruiter_details';
    };
    $scope.onEdit = function(){
      $scope.currentView = 'recruiter_add_edit';
    };

    function addRecruiter(recruiter){
      let index = -1;
      $scope.recruiters.forEach(function(_recruiter, _index){
        if(_recruiter.id === recruiter.id)
          index = _index;
      });
      if(index !== -1)
        $scope.recruiters[index] = recruiter;
      else
        $scope.recruiters.push(recruiter);
    }
  }])
}