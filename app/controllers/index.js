/**
 * Created by gsolis on 3/8/16.
 */

import homeCtrl from './home_ctrl'
import mainCtrl from './main_ctrl'
import candidatesCtrl from './candidates/candidates_ctrl'
import recruitersCtrl from './recruiters/recruiters_ctrl'
import salesPersonsCtrl from './sales_persons/sales_persons_ctrl'

export default appModule => {
  homeCtrl(appModule);
  mainCtrl(appModule);
  candidatesCtrl(appModule);
  recruitersCtrl(appModule);
  salesPersonsCtrl(appModule);
}