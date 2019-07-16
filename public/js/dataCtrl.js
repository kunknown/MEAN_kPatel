//dataCtrl.js

angular.module('dataCtrl', []).controller('dataController', function($scope, $http) {
  function _setEdit(){
      pathName = angular.element(window)[0].location.pathname;
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
      // console.log($scope.homeEdit);
      // console.log($scope.expEdit);
      // console.log($scope.skillEdit);
      // console.log($scope.eduEdit);
      // console.log($scope.projectEdit);
  }
  $scope.newItem = function(){
    _setEdit();
    $scope.data = {};
  }
  $scope.getData = function(id = 0) {
      pathName = angular.element(window)[0].location.pathname.toString();
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
          $scope.data = response.data.result[0];
        }
      },
      function(response){
        console.log(response.status + ' ' + response.statusText);
      });
      _setEdit();
    }
    $scope.editItem = function(id){
      pathName = angular.element(window)[0].location.pathname.toString(); //href = '/resume/experience/add';
      angular.element(window)[0].location.href = pathName + '/edit/'+id;
    }
    $scope.addItem = function(){
      pathName = angular.element(window)[0].location.pathname.toString();
      angular.element(window)[0].location.href = pathName + '/add';
    }
    $scope.deleteItem = function(id){
      pathName = angular.element(window)[0].location.pathname;
      $http.delete('/api' + pathName + '/delete/'+id)
      .then(function(){
        $scope.getData();
      });
    }
    $scope.saveData = function(){
      config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      pathname = angular.element(window)[0].location.pathname;
      $http.post('/api'+pathname, $scope.data, config)
      .then(function(response){
        angular.element(window)[0].history.back();
      },
      function(response){
        angular.element(window)[0].history.back();
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
      pathname = angular.element(window)[0].location.pathname;
      $http.post('/api'+pathname+'/add', $scope.data, config)
      .then(function(response){
        angular.element(document)[0].forms['skillForm'].newSkill.value = '';
        $scope.getData();
      },
      function(response){
        
      });
      
    }
    $scope.sendMail = function(){
      pathname = angular.element(window)[0].location.pathname;
      $http.post('/api'+pathname+'/mail', $scope.data)
      .then(function(response){
        angular.element(document)[0].forms['mail'].reset();
      });
    }
});
