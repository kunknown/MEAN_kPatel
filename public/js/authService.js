'use strict';

angular.module('authService', []).factory('adminStatus', ['$http', '$location', function($http, $location){
    return{
        getAdminStatus: $http.get('/api/admin'),
        setAdminStatus: async function(data){
            var pathname = $location.url();
            await $http.post('/api'+pathname+'/in', data)
            .then(function(response){
                $location.url('/home');
            });
        }
    }
}]);  