//public/js/appRoutes.js

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  //edit
  .when('/:path*\/edit/:id', {
    templateUrl: 'views/editItem.html',
    controller: 'dataController'
  })
  // .when('/resume/experience/edit', {
  //   templateUrl: 'views/editItem.html',
  //   controller: 'dataController'
  // })
  // .when('/resume/skills/edit', {
  //   templateUrl: 'views/editItem.html',
  //   controller: 'dataController'
  // })
  // .when('/resume/education/edit', {
  //   templateUrl: 'views/editItem.html',
  //   controller: 'dataController'
  // })
  // .when('/projects/edit', {
  //   templateUrl: 'views/editItem.html',
  //   controller: 'dataController'
  // })

  //add
  .when('/:path*\/add', {
    templateUrl: 'views/addItem.html',
    controller: 'dataController'
  })
  // .when('/resume/skills/add', {
  //   templateUrl: 'views/addItem.html',
  //   controller: 'dataController'
  // })
  // .when('/resume/education/add', {
  //   templateUrl: 'views/addItem.html',
  //   controller: 'dataController'
  // })
  // .when('/projects/add', {
  //   templateUrl: 'views/addItem.html',
  //   controller: 'dataController'
  // })

  //home
  .when('/home', {
    templateUrl: 'views/home.html',
    controller: 'dataController'
  })
  //resume/experience
  .when('/resume/experience', {
    templateUrl: 'views/experience.html',
    controller: 'dataController'
  })
  //resume/skills
  .when('/resume/skills', {
    templateUrl: 'views/skills.html',
    controller: 'dataController'
  })
  //resume/education
  .when('/resume/education', {
    templateUrl: 'views/education.html',
    controller: 'dataController'
  })
  //projects
  .when('/projects/:projectName?', {
    templateUrl: 'views/projects.html',
    controller: 'dataController'
  })
  //contact
  .when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'dataController'
  });

  $locationProvider.html5Mode(true);
}]);
