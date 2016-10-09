import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ComponentsModule from './components/components';

const dependencies = [
  uiRouter,
  ComponentsModule.name
];

angular.module('app', dependencies)
  .config(function ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        component: 'search'
      })
      .state('user', {
        url: '/user',
        component: 'user'
      })
      .state('project', {
        url: '/user/project',
        component: 'readme'
      })
  });
