/**
 * Created by gsolis on 3/8/16.
 */

import loginDirective from './login/login'
import goToPath from './go_to_path'
import candidateForm from './candidates/candidate_form/candidate_form'
import candidateDetails from './candidates/candidate_detail/candidate_details'
import displayField from './display_field/display_field'

export default appModule => {
  loginDirective(appModule);
  goToPath(appModule);
  candidateForm(appModule);
  candidateDetails(appModule);
  displayField(appModule);
}