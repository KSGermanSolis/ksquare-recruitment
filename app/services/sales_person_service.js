/**
 * Created by gsolis on 3/15/16.
 */

export default appModule => {
  appModule.factory('SalesPerson', ['$http', 'BaseUrl', ($http, BaseUrl) => {

    function save(salesPerson){
      return $http.post(`${BaseUrl}/api/sales_persons`, salesPerson).then((response) => {
        return response.data;
      });
    }
    function getAll(){
      return $http.get(`${BaseUrl}/api/sales_persons`).then((response) => {
        return response.data;
      });
    }
    function getById(id){
      return $http.get(`${BaseUrl}/api/sales_persons/${id}`).then((response) => {
        return response.data;
      });
    }
    function remove(id){
      return $http.delete(`${BaseUrl}/api/sales_persons/${id}`).then((response) => {
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