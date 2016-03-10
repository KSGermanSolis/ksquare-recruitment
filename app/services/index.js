/**
 * Created by gsolis on 3/8/16.
 */

import userService from './user_service'
import candidateService from './candidate_service'

export default appModule => {
  userService(appModule);
  candidateService(appModule);
}