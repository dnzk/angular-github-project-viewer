import angular from 'angular';
import uiRouter from 'angular-ui-router';

const dependencies = [
  uiRouter,
];

angular.module('app', dependencies)
  .config(function ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        template: '<h1>home</h1.'
      })
      .state('away', {
        url: '/away',
        template: '<h1>away</h1>'
      })
  });
