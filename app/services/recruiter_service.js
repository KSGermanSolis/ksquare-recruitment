/**
 * Created by gsolis on 3/11/16.
 */

export default appModule => {
  appModule.factory('Recruiter', ['$http', 'BaseUrl', ($http, BaseUrl) => {

    function save(recruiter){
      return $http.post(`${BaseUrl}/api/recruiters`, recruiter).then((response) => {
        return response.data;
      });
    }
    function getAll(){
      return $http.get(`${BaseUrl}/api/recruiters`).then((response) => {
        return response.data;
      });
    }
    function getById(id){
      return $http.get(`${BaseUrl}/api/recruiters/${id}`).then((response) => {
        return response.data;
      });
    }
    function remove(id){
      return $http.delete(`${BaseUrl}/api/recruiters/${id}`).then((response) => {
        return response.data;
      });
    }

    return {
      save,
      getAll,
      getById,
      remove
    }

  }]);
}
