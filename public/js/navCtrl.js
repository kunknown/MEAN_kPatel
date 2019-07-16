//resumeCtrl.js

angular.module('navCtrl', []).controller('navController', function($scope) {
  $scope.setNavbar = function(){
    angular.element(document).ready(function(){
      pathName = angular.element(window)[0].location.pathname;
      if(pathName.includes('resume')){
        angular.element("#tabs_resume")[0].style.display="";
      }
      else{
        angular.element("#tabs_resume")[0].style.display="none";
      }
      angular.element("nav").find("li").each(function(i,e){
        if(pathName.includes(e.innerText.toLowerCase())){
          e.classList.add("active");
        }
        else{
          e.classList.remove("active");
        }
      });
    });
  }
});
  