/**
 * Created by gsolis on 3/8/16.
 */

import authInterceptorFactory from './auth_interceptor'
import authTokenFactory from './auth_token_factory'
import originalPathFactory from './original_path_factory'
import baseUrlFactory from './base_url_factory'

export default appModule => {
  authInterceptorFactory(appModule);
  authTokenFactory(appModule);
  originalPathFactory(appModule);
  baseUrlFactory(appModule);
}