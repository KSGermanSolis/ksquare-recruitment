/**
 * Created by gsolis on 3/8/16.
 */

export default appModule => {
  appModule.factory('OriginalPathFactory', ['$window', function($window){
    const key = 'original-path';
    let store = $window.localStorage;

    function setPath(token) {
      if (token) {
        store.setItem(key, token);
      } else {
        store.removeItem(key);
      }
    }

    function getPath() {
      return store.getItem(key);
    }

    return {
      setPath,
      getPath
    };

  }])
}