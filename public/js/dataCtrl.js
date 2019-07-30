//dataCtrl.js

angular.module('dataCtrl', []).controller('dataController', ['$scope', '$http', '$location', 'adminStatus', function($scope, $http, $location, adminStatus) {
  function _setEdit(){
      pathName = $location.url();
      $scope.homeEdit = false;
      $scope.expEdit = false;
      $scope.skillEdit = false;
      $scope.eduEdit = false;
      $scope.projectEdit = false;

      if(pathName.includes('home')){
        $scope.homeEdit = true;
      }
      else if(pathName.includes('experience')){
        $scope.expEdit = true;
      }
      else if(pathName.includes('skills')){
        $scope.skillEdit = true;
      }
      else if(pathName.includes('education')){
        $scope.eduEdit = true;
      }
      else if(pathName.includes('projects')){
        $scope.projectEdit = true;
      }
  }
  function _getAdmin(){
    var status = adminStatus.getAdminStatus;
    status.then(function(response){
      $scope.admin = response.data.result.admin;
    })
  }
  $scope.newItem = function(){
    _setEdit();
    _getAdmin();
    $scope.data = {};
  }
  
  $scope.getData = function(id = 0) {
    _getAdmin();
      pathName = $location.url();
      if(id!==0){
        pathName = pathName.replace('/edit', '/get');
        pathNameArr = pathName.split('/');
        id = pathNameArr[pathNameArr.length-1];
      }
      else{
        pathName += '/get';
      }
      $http.get('/api'+pathName)
      .then(function(response){
        if(id===0){
          $scope.data = response.data.result;
        }
        else{
          $scope.data = response.data.result;
        }
      },
      function(response){
        console.log(response.status + ' ' + response.statusText);
      });
      _setEdit();
    }
    $scope.editItem = function(id){
      pathName = $location.url(); //href = '/resume/experience/add';
      $location.url(pathName + '/edit/'+id);

    }
    $scope.addItem = function(){
      pathName = $location.url();
      $location.url(pathName + '/add');
    }
    $scope.deleteItem = function(id){
      if($scope.admin){
        pathName = $location.url();
        $http.delete('/api' + pathName + '/delete/'+id)
        .then(function(){
          $scope.getData();
        });
      }
    }
    $scope.saveData = function(){
      config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      pathname = $location.url();
      $http.post('/api'+pathname, $scope.data, config)
      .then(function(response){
        if(pathname.includes('experience')){
          path = '/resume/experience';
        }
        else if(pathname.includes('education')){
          path = '/resume/education';
        }
        else if(pathname.includes('projects')){
          path = '/projects';
        }
        else{
          path = '/home';
        }
        $location.url(path);
      },
      function(error){
        console.log(error);
      });
    }
    $scope.addSkill = function(){
      $scope.data = {
        name: $scope.newSkill
      };
      config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      pathname = $location.url();
      $http.post('/api'+pathname+'/add', $scope.data, config)
      .then(function(response){
        angular.element(document)[0].forms['skillForm'].newSkill.value = '';
        $scope.getData();
      },
      function(response){
        
      });
    }
    $scope.sendMail = function(){
      pathname = $location.url();
      $http.post('/api'+pathname+'/mail', $scope.data)
      .then(function(response){
        angular.element(document)[0].forms['mail'].reset();
      });
    }
    $scope.logIn = function(){
      adminStatus.setAdminStatus($scope.data);
    };
}]);
