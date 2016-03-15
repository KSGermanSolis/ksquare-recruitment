/**
 * Created by gsolis on 3/8/16.
 */

export default appModule => {
  appModule.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
    $routeProvider
    .when('/', {
      templateUrl: 'views/home/dashboard.html',
      controller: 'HomeCtrl',
      allowAnonymous: false
    })
    .when('/login', {
      templateUrl: 'views/login/login.html',
      allowAnonymous: true
    })
    .when('/candidates', {
      templateUrl: 'views/candidates/candidates.html',
      controller: 'CandidatesCtrl',
      allowAnonymous: false
    })
    .when('/recruiters', {
      templateUrl: 'views/recruiters/recruiters.html',
      controller: 'RecruitersCtrl',
      allowAnonymous: false
    })
    .when('/salespersons', {
      templateUrl: 'views/sales_persons/sales_persons.html',
      controller: 'SalesPersonsCtrl',
      allowAnonymous: false
    });

    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });
  }])
}