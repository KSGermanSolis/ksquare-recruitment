/**
 * Created by gsolis on 3/8/16.
 */

export default appModule => {
  appModule.factory('BaseUrl', () => {
    return 'http://localhost:9001';
  })
}