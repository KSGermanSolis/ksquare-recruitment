/**
 * Created by gsolis on 3/9/16.
 */

export default appModule => {
  appModule.controller('CandidatesCtrl', ['$scope', 'Candidate', 'Recruiter', function($scope, Candidate, Recruiter){
    $scope.candidate = null;
    $scope.candidates = [];
    Candidate.getAll().then(function(candidates){
      $scope.candidates = candidates;
      parseDates();
    });
    $scope.search = '';
    $scope.candidatesFilter = function(candidate){
      var regex = new RegExp($scope.search, 'gi');
      return $scope.search === '' ? true : regex.test(candidate.firstName +' '+candidate.lastName);
    };
    $scope.currentView = 'none';
    $scope.showAddCandidateForm = function(){
      $scope.candidate = null;
      $scope.currentView = 'candidate_add_edit';
    };
    $scope.onCancel = function(){
      if($scope.candidate != null){
        $scope.selectCandidate($scope.candidate);
      }else
        $scope.currentView = 'none';
    };
    $scope.onSave = function(candidate){
      candidate.startDate = new Date(candidate.startDate);
      candidate.endDate = new Date(candidate.endDate);
      addCandidate(candidate);
      $scope.selectCandidate(candidate);
    };
    $scope.selectCandidate = function(candidate){
      //if(!candidate.recruiter){
        Recruiter.getById(candidate.recruiterId).then(function(recruiter){
          $scope.candidate.recruiter = recruiter;
        });
      //}
      $scope.candidate = candidate;
      $scope.currentView = 'candidate_details';
    };
    $scope.onEdit = function(){
      $scope.currentView = 'candidate_add_edit';
    };
    $scope.onDelete = function(){
      $scope.candidates.splice($scope.candidates.indexOf($scope.candidate), 1);
      $scope.candidate = null;
      $scope.currentView = 'none';
    };

    function addCandidate(candidate){
      let index = -1;
      $scope.candidates.forEach(function(_candidate, _index){
        if(_candidate.id === candidate.id)
          index = _index;
      });
      if(index !== -1)
        $scope.candidates[index] = candidate;
      else
        $scope.candidates.push(candidate);
    }
    function parseDates(){
      $scope.candidates.forEach((candidate)=>{
        if(candidate.startDate) candidate.startDate = new Date(candidate.startDate);
        if(candidate.endDate) candidate.endDate = new Date(candidate.endDate);
      })
    }
  }])
}