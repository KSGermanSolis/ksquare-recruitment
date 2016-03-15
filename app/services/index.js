/**
 * Created by gsolis on 3/8/16.
 */

import userService from './user_service'
import candidateService from './candidate_service'
import recruiterService from './recruiter_service'
import salesPersonService from './sales_person_service'

export default appModule => {
  userService(appModule);
  candidateService(appModule);
  recruiterService(appModule);
  salesPersonService(appModule);
}