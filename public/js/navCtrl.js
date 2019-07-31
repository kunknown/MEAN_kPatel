'use strict';

angular.module('navCtrl', []).controller('navController', ['$scope', '$timeout', '$http', '$location', 'adminStatus', function($scope, $timeout, $http, $location, adminStatus) {
  var status = adminStatus.getAdminStatus;
  status.then(function(response){
    $scope.admin = response.data.result.admin;
  });
  $scope.setNavbar = function(){
    angular.element(document).ready(function(){
      $timeout(function(){
        var pathName = $location.url();
        if(pathName.includes('resume')){
          angular.element("#tabs_resume")[0].style.display="";
        }
        else{
          angular.element("#tabs_resume")[0].style.display="none";
        }
        angular.element("nav").find("li").each(function(i,e){
          if(pathName.includes(e.innerText.toLowerCase()) && e.classList.toString().includes('main')){
            e.classList.add("active");
          }
          else{
            e.classList.remove("active");
          }
        });
        $('.sidenav').sidenav();
        $('.sidenav').on('click', function(){
          $('.sidenav').animate({left: '-500px'});
        });
      })
    });
  }
  $scope.logOut = function(){
    $http.get('/api/logout',{})
    .then(function(response){
      angular.element(window)[0].location.href = '/home';
    });
  }
}]);
  