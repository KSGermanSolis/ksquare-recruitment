/**
 * Created by gsolis on 3/8/16.
 */

import loginDirective from './login/login'
import goToPath from './go_to_path'

export default appModule => {
  loginDirective(appModule);
  goToPath(appModule);
}