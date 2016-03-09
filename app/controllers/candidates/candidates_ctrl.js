/**
 * Created by gsolis on 3/9/16.
 */

export default appModule => {
  appModule.controller('CandidatesCtrl', ['$scope', function($scope){
    let self = this;
    self.candidates = [{id: 1, name: 'Candidate 1'},{id: 2, name: 'Candidate 2'}];
  }])
}