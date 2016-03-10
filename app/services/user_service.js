/**
 * Created by gsolis on 3/8/16.
 */

export default appModule => {
  appModule.factory('User', ['$http', '$window', 'BaseUrl', function($http, $window, BaseUrl){
    const key = 'user';
    let store = $window.localStorage;

    function login(credentials){
      return $http.post(BaseUrl + '/api/login', credentials).then((response) => {
        return response.data;
      });
    }

    function setUser(user){
      if (user) {
        store.setItem(key, JSON.stringify(user));
      } else {
        store.removeItem(key);
      }
    }

    function getUser(){
      return JSON.parse(store.getItem(key));
    }

    return {
      login,
      setUser,
      getUser
    }
  }])
}