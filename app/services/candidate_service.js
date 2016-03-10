/**
 * Created by gsolis on 3/9/16.
 */

export default appModule => {
  appModule.factory('Candidate', ['$http', 'BaseUrl', ($http, BaseUrl) => {

    function save(candidate){
      return $http.post(`${BaseUrl}/api/candidates`, candidate).then((response) => {
        return response.data;
      });
    }
    function getAll(){
      return $http.get(`${BaseUrl}/api/candidates`).then((response) => {
        return response.data;
      });
    }
    function getById(id){
      return $http.get(`${BaseUrl}/api/candidates/${id}`).then((response) => {
        return response.data;
      });
    }
    function remove(id){
      return $http.delete(`${BaseUrl}/api/candidates/${id}`).then((response) => {
        return response.data;
      });
    }

    return {
      save,
      getAll,
      getById,
      remove
    }
  }])
}