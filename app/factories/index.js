/**
 * Created by gsolis on 3/8/16.
 */

import authTokenFactory from './auth_token_factory'
import originalPathFactory from './original_path_factory'
import baseUrl from './base_url'

export default appModule => {
  authTokenFactory(appModule);
  originalPathFactory(appModule);
  baseUrl(appModule);
}