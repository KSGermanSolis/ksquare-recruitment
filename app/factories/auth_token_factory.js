/**
 * Created by gsolis on 3/8/16.
 */

export default appModule => {
  appModule.factory('AuthTokenFactory', ['$window', function($window){
    const key = 'auth-token';
    let store = $window.localStorage;

    function getToken() {
      return store.getItem(key);
    }

    function setToken(token) {
      if (token) {
        store.setItem(key, token);
      } else {
        store.removeItem(key);
      }
    }

    return {
      getToken,
      setToken
    }
  }])
}