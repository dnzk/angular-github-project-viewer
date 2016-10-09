import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ComponentsModule from './components/components';
import CommonModule from './common/common';

const dependencies = [
  uiRouter,
  ComponentsModule.name,
  CommonModule.name
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
        url: '/:user',
        component: 'user'
      })
      .state('project', {
        url: '/:user/:project',
        component: 'readme'
      })
  });
