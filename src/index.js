import angular from 'angular';
import uiRouter from 'angular-ui-router';

const dependencies = [
  uiRouter,
];

angular.module('app', dependencies)
  .config(function ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.otherwise('/');
  });
