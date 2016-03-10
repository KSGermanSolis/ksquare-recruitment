/**
 * Created by gsolis on 3/9/16.
 */

import template from './display_field.html'
import style from './display_field.less'

export default appModule => {
  appModule.directive('displayField', [() => {
    return {
      restrict: 'E',
      scope: {
        key: '@',
        value: '@'
      },
      template
    }
  }])
}