/**
 * Created by gsolis on 3/8/16.
 */

import homeCtrl from './home_ctrl'
import mainCtrl from './main_ctrl'
import candidatesCtrl from './candidates/candidates_ctrl'

export default appModule => {
  homeCtrl(appModule);
  mainCtrl(appModule);
  candidatesCtrl(appModule);
}