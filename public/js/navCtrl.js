//resumeCtrl.js

angular.module('navCtrl', []).controller('navController', ['$scope', '$timeout', '$http', 'adminStatus', function($scope, $timeout, $http, adminStatus) {
  var status = adminStatus.getAdminStatus;
  status.then(function(response){
    $scope.admin = response.data.result.admin;
  });
  $scope.setNavbar = function(){
    angular.element(document).ready(function(){
      $timeout(function(){
        pathName = angular.element(window)[0].location.pathname;
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
  