import angular from 'angular';
import pageHeaderComponent from './page-header.component';

const PageHeaderModule = angular.module('pageHeader', [])
  .component('pageHeader', pageHeaderComponent);

export default PageHeaderModule;