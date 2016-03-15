/**
 * Created by gsolis on 3/8/16.
 */

import loginDirective from './login/login'
import goToPath from './go_to_path'
import displayField from './display_field/display_field'
import candidateForm from './candidates/candidate_form/candidate_form'
import candidateDetails from './candidates/candidate_detail/candidate_details'
import recruiterForm from './recruiters/recruiter_form/recruiter_form'
import recruiterDetails from './recruiters/recruiter_detail/recruiter_details'
import salesPersonForm from './sales_persons/sales_person_form/sales_person_form'
import salesPersonDetails from './sales_persons/sales_person_detail/sales_person_details'
//import displayModel from './display_model/display_model'

export default appModule => {
  loginDirective(appModule);
  goToPath(appModule);
  candidateForm(appModule);
  candidateDetails(appModule);
  displayField(appModule);
  recruiterForm(appModule);
  recruiterDetails(appModule);
  salesPersonForm(appModule);
  salesPersonDetails(appModule);
}