/**
 * Created by gsolis on 3/10/16.
 */

import template from './display_model.html'
import  style from './display_model.less'

export default appModule => {
  appModule.directive('displayModel', [() => {
    const link = function(){

    };
    const controller = ['$scope', function($scope){
      let self = this;
      console.log('Model: ', $scope.model);
      if($scope.model){
        self.model = JSON.parse($scope.model);
        let keys = Object.keys(self.model);
        self.fields = keys.map((key) => {
          return {key: key, value: self.model[key]}
        });
        console.log(self.fields);
      }
    }];
    return {
      restrict: 'E',
      scope: {
        model: '@'
      },
      link,
      controller,
      controllerAs: 'vm',
      template
    }
  }])
}