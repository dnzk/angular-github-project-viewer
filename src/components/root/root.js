import angular from 'angular';
import appComponent from './root.component';

const AppModule = angular
  .module('root', [])
    .component('root', appComponent);

export default AppModule;