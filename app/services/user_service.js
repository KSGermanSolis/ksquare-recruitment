/**
 * Created by gsolis on 3/8/16.
 */

export default appModule => {
  appModule.factory('User', ['$http', '$window', 'BaseUrl', function($http, $window, BaseUrl){
    const key = 'user';
    let store = $window.localStorage;

    function login(credentials){
      return $http.post(BaseUrl + '/api/login', credentials).then(function(response){
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

    function getRecruiters(){
      return $http.get(BaseUrl + '/api/recruiters').then(function(response){
        return response.data;
      });
    }

    return {
      login,
      setUser,
      getUser,
      getRecruiters
    }
  }])
}