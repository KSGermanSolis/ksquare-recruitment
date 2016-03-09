/**
 * Created by gsolis on 3/9/16.
 */

export default appModule => {
  appModule.factory('AuthInterceptor', ['AuthTokenFactory', (AuthTokenFactory) => {

    function addToken(config) {
      var token = AuthTokenFactory.getToken();
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    }

    return {
      request: addToken
    };

  }])
}